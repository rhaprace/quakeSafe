import { useQuery } from '@tanstack/react-query';
import { newsAPI } from '@/services/newsAPI';
import { newsArticles } from '@/data/news';
import type { NewsArticle } from '@/types/news';

interface UseNewsOptions {
  useRealAPI?: boolean;
  apiKey?: string;
  pageSize?: number;
}
export const useNews = (options: UseNewsOptions = {}) => {
  const {
    useRealAPI = false,
    apiKey = import.meta.env.VITE_NEWS_API_KEY,
    pageSize = 20,
  } = options;

  return useQuery<NewsArticle[], Error>({
    queryKey: ['earthquake-news', useRealAPI, pageSize],
    queryFn: async () => {
      if (!useRealAPI || !apiKey || apiKey === 'YOUR_NEWS_API_KEY') {
        console.info('Using static news data. Set VITE_NEWS_API_KEY to use real news.');
        return newsArticles;
      }

      try {
        const articles = await newsAPI.getEarthquakeNews(apiKey, pageSize);

        if (articles.length === 0) {
          console.warn('No articles from NewsAPI, using fallback data');
          return newsArticles;
        }

        return articles;
      } catch (error) {
        console.error('Error fetching news, using fallback data:', error);
        return newsArticles;
      }
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,

    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchInterval: false,

    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000),

    networkMode: 'online',
  });
};

export default useNews;
