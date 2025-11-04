import { useQuery } from '@tanstack/react-query';
import { usgsAPI } from '@/services/api';
import type { EarthquakeResponse } from './useEarthquakeData';

interface UseNearbyEarthquakesOptions {
  latitude: number;
  longitude: number;
  radiusKm?: number;
  minMagnitude?: number;
  enabled?: boolean;
}

export const useNearbyEarthquakes = ({
  latitude,
  longitude,
  radiusKm = 500,
  minMagnitude = 2.5,
  enabled = true,
}: UseNearbyEarthquakesOptions) => {
  return useQuery<EarthquakeResponse>({
    queryKey: ['earthquakes', 'nearby', latitude, longitude, radiusKm, minMagnitude],
    queryFn: () => usgsAPI.getNearbyEarthquakes(latitude, longitude, radiusKm, minMagnitude),
    enabled: enabled && !!latitude && !!longitude,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export default useNearbyEarthquakes;

