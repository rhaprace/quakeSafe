import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { EarthquakeFeature } from '@/hooks/useEarthquakeData';
import { formatDate } from '@/utils/formatDate';


import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface EarthquakeMapProps {
  earthquakes: EarthquakeFeature[];
  selectedEarthquake?: EarthquakeFeature | null;
  height?: string;
}
const MapBoundsHandler = ({ earthquakes, selectedEarthquake }: { earthquakes: EarthquakeFeature[], selectedEarthquake?: EarthquakeFeature | null }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedEarthquake) {
      const { coordinates } = selectedEarthquake.geometry;
      const [lng, lat] = coordinates;
      map.setView([lat, lng], 8, { animate: true });
    } else if (earthquakes.length > 0) {
      const bounds = new LatLngBounds([]);
      earthquakes.forEach(earthquake => {
        const [lng, lat] = earthquake.geometry.coordinates;
        bounds.extend([lat, lng]);
      });
      
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }
  }, [earthquakes, selectedEarthquake, map]);

  return null;
};

const getMarkerIcon = (magnitude: number) => {
  const size = Math.max(8, Math.min(magnitude * 4, 24));
  let color = '#22c55e';
  
  if (magnitude >= 6) {
    color = '#dc2626';
  } else if (magnitude >= 5) {
    color = '#ea580c';
  } else if (magnitude >= 4) {
    color = '#eab308';
  }

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="#fff" stroke-width="2"/>
        <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">
          ${magnitude.toFixed(1)}
        </text>
      </svg>
    `)}`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

const EarthquakeMap = ({ earthquakes, selectedEarthquake, height = '400px' }: EarthquakeMapProps) => {
  const mapRef = useRef<L.Map>(null);

  return (
    <div className="w-full rounded-lg overflow-hidden border" style={{ height }}>
      <MapContainer
        ref={mapRef}
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapBoundsHandler earthquakes={earthquakes} selectedEarthquake={selectedEarthquake} />
        
        {earthquakes.map((earthquake) => {
          const { coordinates } = earthquake.geometry;
          const [lng, lat] = coordinates;
          const { properties } = earthquake;
          
          return (
            <Marker
              key={earthquake.id}
              position={[lat, lng]}
              icon={getMarkerIcon(properties.mag)}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-semibold text-sm mb-2">
                    Magnitude {properties.mag} Earthquake
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Location:</strong> {properties.place}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Time:</strong> {formatDate(properties.time)}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Depth:</strong> {coordinates[2]?.toFixed(1)} km
                  </p>
                  {properties.tsunami === 1 && (
                    <p className="text-sm text-red-600 font-semibold">
                      ⚠️ Tsunami Warning
                    </p>
                  )}
                  <button
                    onClick={() => window.open(properties.url, '_blank')}
                    className="mt-2 text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;
