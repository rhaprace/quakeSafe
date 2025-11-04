import { useQuery } from '@tanstack/react-query';
import { usgsAPI, type USGSQueryParams } from '@/services/api';

export interface EarthquakeProperties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz?: number;
  url: string;
  detail: string;
  felt?: number;
  cdi?: number;
  mmi?: number;
  alert?: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst?: number;
  dmin?: number;
  rms: number;
  gap?: number;
  magType: string;
  type: string;
  title: string;
}

export interface EarthquakeGeometry {
  type: 'Point';
  coordinates: [number, number, number];
}

export interface EarthquakeFeature {
  type: 'Feature';
  properties: EarthquakeProperties;
  geometry: EarthquakeGeometry;
  id: string;
}

export interface EarthquakeResponse {
  type: 'FeatureCollection';
  metadata: {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    count: number;
  };
  features: EarthquakeFeature[];
}

export const useEarthquakeData = (params?: USGSQueryParams) => {
  return useQuery<EarthquakeResponse>({
    queryKey: ['earthquakes', params],
    queryFn: () => usgsAPI.getEarthquakes(params),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useSignificantEarthquakes = () => {
  return useQuery<EarthquakeResponse>({
    queryKey: ['earthquakes', 'significant'],
    queryFn: () => usgsAPI.getSignificantEarthquakes(),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
  });
};

export const useRecentEarthquakes = (hours: number = 24) => {
  return useQuery<EarthquakeResponse>({
    queryKey: ['earthquakes', 'recent', hours],
    queryFn: () => usgsAPI.getRecentEarthquakes(hours),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 3,
  });
};

export default useEarthquakeData;
