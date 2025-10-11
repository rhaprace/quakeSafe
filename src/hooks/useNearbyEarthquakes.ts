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

/**
 * Hook to fetch earthquakes near a specific location
 */
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
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  });
};

export default useNearbyEarthquakes;

