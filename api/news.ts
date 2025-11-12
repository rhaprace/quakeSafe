import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NewsAPIArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const pageSize = Math.min(
    parseInt(req.query.pageSize as string) || 20,
    100
  );

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?` +
        `q=earthquake OR seismic OR tremor&` +
        `language=en&` +
        `sortBy=publishedAt&` +
        `pageSize=${pageSize}&` +
        `apiKey=${apiKey}`,
      {
        headers: {
          'User-Agent': 'QuakeSafe/1.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data: NewsAPIResponse = await response.json();

    res.status(200).json({
      success: true,
      articles: data.articles,
      totalResults: data.totalResults,
    });
  } catch {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news',
    });
  }
}
