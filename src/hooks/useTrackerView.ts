import { useState, useCallback } from 'react';
import type { EarthquakeFeature } from './useEarthquakeData';
import type { TrackerView } from '@/utils/tracker';
import { DEFAULT_TRACKER_VIEW } from '@/utils/tracker';

export const useTrackerView = () => {
  const [selectedEarthquake, setSelectedEarthquake] = useState<EarthquakeFeature | null>(null);
  const [view, setView] = useState<TrackerView>(DEFAULT_TRACKER_VIEW);

  const handleViewOnMap = useCallback((earthquake: EarthquakeFeature) => {
    setSelectedEarthquake(earthquake);
    setView('map');
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedEarthquake(null);
  }, []);

  return {
    selectedEarthquake,
    view,
    setView,
    handleViewOnMap,
    clearSelection,
  };
};

