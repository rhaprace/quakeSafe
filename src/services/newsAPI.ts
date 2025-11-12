import { API_ENDPOINTS } from './api';
import type { NewsArticle } from '@/types/news';

interface NewsAPIArticle {
  source: {
    id: string | null;
    name: string;
  };
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

class RateLimiter {
  private lastCallTime: number = 0;
  private minInterval: number = 1000;

  async throttle(): Promise<void> {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastCallTime;

    if (timeSinceLastCall < this.minInterval) {
      const waitTime = this.minInterval - timeSinceLastCall;
      console.log(`Rate limiting: waiting ${waitTime}ms before next API call`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.lastCallTime = Date.now();
  }

  canMakeRequest(): boolean {
    const now = Date.now();
    return (now - this.lastCallTime) >= this.minInterval;
  }
}

const rateLimiter = new RateLimiter();

export const newsAPI = {
 
  getEarthquakeNews: async (
    apiKey: string,
    pageSize: number = 20,
    page: number = 1
  ): Promise<NewsArticle[]> => {
    if (!apiKey || apiKey === 'YOUR_NEWS_API_KEY') {
      console.warn('NewsAPI key not configured. Using fallback data.');
      return [];
    }

    try {
      await rateLimiter.throttle();

      const params = new URLSearchParams({
        q: 'earthquake OR seismic OR tremor',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: String(pageSize),
        page: String(page),
        apiKey: apiKey,
      });

      console.log('Fetching earthquake news from NewsAPI...');
      const response = await fetch(`${API_ENDPOINTS.NEWS_API}/everything?${params}`);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid NewsAPI key. Get your free key at https://newsapi.org/');
        }
        if (response.status === 429) {
          throw new Error('NewsAPI rate limit exceeded. Please try again later.');
        }
        throw new Error(`NewsAPI Error: ${response.status} ${response.statusText}`);
      }

      const data: NewsAPIResponse = await response.json();
      console.log(`Successfully fetched ${data.articles.length} articles from NewsAPI`);

      return data.articles.map((article, index) =>
        transformNewsAPIArticle(article, index)
      );
    } catch (error) {
      console.error('Error fetching earthquake news:', error);
      throw error;
    }
  },

  getTopHeadlines: async (
    apiKey: string,
    country: string = 'us',
    pageSize: number = 10
  ): Promise<NewsArticle[]> => {
    if (!apiKey || apiKey === 'YOUR_NEWS_API_KEY') {
      console.warn('NewsAPI key not configured. Using fallback data.');
      return [];
    }

    try {
      await rateLimiter.throttle();

      const params = new URLSearchParams({
        q: 'earthquake',
        country: country,
        category: 'science',
        pageSize: String(pageSize),
        apiKey: apiKey,
      });

      console.log('Fetching top headlines from NewsAPI...');
      const response = await fetch(`${API_ENDPOINTS.NEWS_API}/top-headlines?${params}`);

      if (!response.ok) {
        throw new Error(`NewsAPI Error: ${response.status}`);
      }

      const data: NewsAPIResponse = await response.json();
      console.log(`Successfully fetched ${data.articles.length} headlines from NewsAPI`);

      return data.articles.map((article, index) =>
        transformNewsAPIArticle(article, index)
      );
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  },
};

function transformNewsAPIArticle(article: NewsAPIArticle, index: number): NewsArticle {
  const category = categorizeArticle(article.title, article.description);

  const tags = extractTags(article.title, article.description);
  const wordCount = article.content ? article.content.split(' ').length : 300;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: `news-${Date.now()}-${index}`,
    title: article.title,
    excerpt: article.description || 'Read more about this earthquake-related news.',
    content: article.content || article.description || '',
    author: article.author || article.source.name || 'News Source',
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    category: category,
    imageUrl: article.urlToImage || undefined,
    url: article.url,
    tags: tags,
    readTime: readTime,
  };
}

function categorizeArticle(title: string, description: string): NewsArticle['category'] {
  const text = `${title} ${description}`.toLowerCase();

  if (text.includes('research') || text.includes('study') || text.includes('scientist')) {
    return 'research';
  }
  if (text.includes('technology') || text.includes('sensor') || text.includes('detection') || text.includes('warning')) {
    return 'technology';
  }
  if (text.includes('prepare') || text.includes('kit') || text.includes('emergency')) {
    return 'preparedness';
  }
  if (text.includes('community') || text.includes('volunteer') || text.includes('relief')) {
    return 'community';
  }

  return 'safety';
}

function extractTags(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase();
  const tags: string[] = [];

  const keywords = [
    'earthquake', 'seismic', 'tremor', 'magnitude', 'aftershock',
    'tsunami', 'fault', 'tectonic', 'preparedness', 'safety',
    'warning', 'alert', 'emergency', 'disaster', 'relief'
  ];

  keywords.forEach(keyword => {
    if (text.includes(keyword)) {
      tags.push(keyword);
    }
  });

  return tags.slice(0, 5);
}

export default newsAPI;
