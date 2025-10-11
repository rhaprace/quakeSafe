import { useQuery } from '@tanstack/react-query';
import { geolocationAPI } from '@/services/api';

interface LocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
  country_code?: string;
  region?: string;
}

export const useUserLocation = (enabled: boolean = true) => {
  return useQuery<LocationData>({
    queryKey: ['user-location'],
    queryFn: geolocationAPI.getUserLocation,
    enabled,
    staleTime: 60 * 60 * 1000, // 1 hour
    retry: 2,
  });
};

export const useBrowserLocation = () => {
  return useQuery<GeolocationPosition>({
    queryKey: ['browser-location'],
    queryFn: geolocationAPI.getBrowserLocation,
    enabled: false,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

export default useUserLocation;

