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

/**
 * Hook to fetch earthquake statistics for a time period
 */
export const useEarthquakeStatistics = (days: number = 30) => {
  return useQuery<EarthquakeStatistics>({
    queryKey: ['earthquake-statistics', days],
    queryFn: () => statisticsAPI.getStatistics(days),
    staleTime: 30 * 60 * 1000, // 30 minutes
    refetchInterval: 60 * 60 * 1000, // 1 hour
    retry: 3,
  });
};

export default useEarthquakeStatistics;

