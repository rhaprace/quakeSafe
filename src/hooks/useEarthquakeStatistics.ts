import { useQuery } from '@tanstack/react-query';
import { statisticsAPI } from '@/services/api';

interface EarthquakeStatistics {
  total: number;
  averageMagnitude: number;
  maxMagnitude: number;
  minMagnitude: number;
  significant: number;
  withTsunami: number;
  period: {
    start: string;
    end: string;
    days: number;
  };
}

export const useEarthquakeStatistics = (days: number = 30) => {
  return useQuery<EarthquakeStatistics>({
    queryKey: ['earthquake-statistics', days],
    queryFn: () => statisticsAPI.getStatistics(days),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export default useEarthquakeStatistics;
