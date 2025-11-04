import { useState, useCallback } from 'react';
import type { CityEmergencyData } from '@/types/emergency-finder';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, CITY_ZOOM_LEVEL } from '@/utils/emergency-finder/map-config';

export const useEmergencyFinderMap = () => {
  const [selectedCity, setSelectedCity] = useState<CityEmergencyData | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>(DEFAULT_MAP_CENTER);
  const [mapZoom, setMapZoom] = useState(DEFAULT_MAP_ZOOM);

  const handleCitySelect = useCallback((city: CityEmergencyData) => {
    setSelectedCity(city);
    setMapCenter(city.coordinates);
    setMapZoom(CITY_ZOOM_LEVEL);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCity(null);
  }, []);

  return {
    selectedCity,
    mapCenter,
    mapZoom,
    handleCitySelect,
    clearSelection,
  };
};

