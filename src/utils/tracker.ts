import type { EarthquakeFeature } from '@/hooks/useEarthquakeData';

export const sortEarthquakesByTime = (
  earthquakes: EarthquakeFeature[]
): EarthquakeFeature[] => {
  return [...earthquakes].sort((a, b) => b.properties.time - a.properties.time);
};

export type TrackerView = 'map' | 'list' | 'both';

export const DEFAULT_TRACKER_VIEW: TrackerView = 'both';

