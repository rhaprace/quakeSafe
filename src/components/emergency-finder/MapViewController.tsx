/**
 * Map view controller component for Leaflet maps
 * Updates map view when center or zoom changes
 */

import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface MapViewControllerProps {
  center: [number, number];
  zoom: number;
}

export const MapViewController: React.FC<MapViewControllerProps> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
};

