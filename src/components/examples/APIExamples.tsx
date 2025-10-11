/**
 * Example component demonstrating how to use the new API services
 * This file is for reference only - not used in production
 */

import { useEarthquakeData, useSignificantEarthquakes, useRecentEarthquakes } from '@/hooks/useEarthquakeData';
import useNearbyEarthquakes from '@/hooks/useNearbyEarthquakes';
import useUserLocation from '@/hooks/useUserLocation';
import useEarthquakeStatistics from '@/hooks/useEarthquakeStatistics';

// Example 1: Basic earthquake data
export const BasicEarthquakeExample = () => {
  const { data, isLoading, error } = useEarthquakeData();

  if (isLoading) return <div>Loading earthquakes...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Recent Earthquakes</h2>
      <p>Total: {data?.features.length}</p>
      {data?.features.slice(0, 5).map((eq) => (
        <div key={eq.id}>
          <strong>M{eq.properties.mag.toFixed(1)}</strong> - {eq.properties.place}
        </div>
      ))}
    </div>
  );
};

// Example 2: Significant earthquakes only
export const SignificantEarthquakesExample = () => {
  const { data, isLoading } = useSignificantEarthquakes();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Significant Earthquakes (M4.5+)</h2>
      <p>Count: {data?.features.length}</p>
      {data?.features.map((eq) => (
        <div key={eq.id} className="border p-4 mb-2">
          <div className="font-bold">M{eq.properties.mag.toFixed(1)}</div>
          <div>{eq.properties.place}</div>
          <div className="text-sm text-muted-foreground">
            {new Date(eq.properties.time).toLocaleString()}
          </div>
          {eq.properties.tsunami === 1 && (
            <div className="text-red-600 font-bold">⚠️ Tsunami Warning</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Example 3: Recent earthquakes (last 24 hours)
export const RecentEarthquakesExample = () => {
  const { data } = useRecentEarthquakes(24);

  return (
    <div>
      <h2>Last 24 Hours</h2>
      <p>Total earthquakes: {data?.features.length}</p>
    </div>
  );
};

// Example 4: Nearby earthquakes based on user location
export const NearbyEarthquakesExample = () => {
  const { data: location } = useUserLocation();
  const { data: earthquakes, isLoading } = useNearbyEarthquakes({
    latitude: location?.latitude || 0,
    longitude: location?.longitude || 0,
    radiusKm: 500,
    minMagnitude: 2.5,
    enabled: !!location, // Only fetch when location is available
  });

  if (!location) return <div>Getting your location...</div>;
  if (isLoading) return <div>Finding nearby earthquakes...</div>;

  return (
    <div>
      <h2>Earthquakes Near You</h2>
      <p>Your location: {location.city}, {location.country}</p>
      <p>Within 500km: {earthquakes?.features.length} earthquakes</p>
      {earthquakes?.features.slice(0, 5).map((eq) => {
        const [lon, lat] = eq.geometry.coordinates;
        const distance = calculateDistance(
          location.latitude,
          location.longitude,
          lat,
          lon
        );
        return (
          <div key={eq.id} className="border p-3 mb-2">
            <div className="font-bold">M{eq.properties.mag.toFixed(1)}</div>
            <div>{eq.properties.place}</div>
            <div className="text-sm">~{distance.toFixed(0)}km away</div>
          </div>
        );
      })}
    </div>
  );
};

// Example 5: Earthquake statistics
export const StatisticsExample = () => {
  const { data: stats } = useEarthquakeStatistics(30);

  if (!stats) return <div>Loading statistics...</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border p-4">
        <div className="text-2xl font-bold">{stats.total}</div>
        <div className="text-sm text-muted-foreground">Total Earthquakes</div>
      </div>
      <div className="border p-4">
        <div className="text-2xl font-bold">{stats.averageMagnitude.toFixed(1)}</div>
        <div className="text-sm text-muted-foreground">Average Magnitude</div>
      </div>
      <div className="border p-4">
        <div className="text-2xl font-bold">M{stats.maxMagnitude.toFixed(1)}</div>
        <div className="text-sm text-muted-foreground">Largest Earthquake</div>
      </div>
      <div className="border p-4">
        <div className="text-2xl font-bold">{stats.significant}</div>
        <div className="text-sm text-muted-foreground">Significant (M4.5+)</div>
      </div>
      <div className="border p-4">
        <div className="text-2xl font-bold">{stats.withTsunami}</div>
        <div className="text-sm text-muted-foreground">With Tsunami</div>
      </div>
      <div className="border p-4">
        <div className="text-2xl font-bold">{stats.period.days} days</div>
        <div className="text-sm text-muted-foreground">Time Period</div>
      </div>
    </div>
  );
};

// Example 6: Custom earthquake query
export const CustomQueryExample = () => {
  const { data } = useEarthquakeData({
    minmagnitude: 5.0,
    maxmagnitude: 7.0,
    starttime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    endtime: new Date().toISOString(),
    orderby: 'magnitude',
    limit: 20,
  });

  return (
    <div>
      <h2>M5.0-7.0 Earthquakes (Last 7 Days)</h2>
      <p>Sorted by magnitude</p>
      {data?.features.map((eq) => (
        <div key={eq.id}>
          M{eq.properties.mag.toFixed(1)} - {eq.properties.place}
        </div>
      ))}
    </div>
  );
};

// Example 7: Regional earthquakes (bounding box)
export const RegionalExample = () => {
  // Philippines bounding box
  const { data } = useEarthquakeData({
    minlatitude: 4.5,
    maxlatitude: 21.0,
    minlongitude: 116.0,
    maxlongitude: 127.0,
    minmagnitude: 2.5,
  });

  return (
    <div>
      <h2>Philippines Region Earthquakes</h2>
      <p>Total: {data?.features.length}</p>
    </div>
  );
};

// Example 8: Combining multiple data sources
export const CombinedExample = () => {
  const { data: location } = useUserLocation();
  const { data: stats } = useEarthquakeStatistics(7);
  const { data: significant } = useSignificantEarthquakes();
  const { data: nearby } = useNearbyEarthquakes({
    latitude: location?.latitude || 0,
    longitude: location?.longitude || 0,
    radiusKm: 1000,
    enabled: !!location,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Earthquake Dashboard</h2>
        
        {location && (
          <div className="bg-muted p-4 rounded-lg mb-4">
            <p>📍 Your Location: {location.city}, {location.country}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border p-4 rounded">
            <div className="text-3xl font-bold">{stats?.total || 0}</div>
            <div className="text-sm">Last 7 Days</div>
          </div>
          <div className="border p-4 rounded">
            <div className="text-3xl font-bold">{significant?.features.length || 0}</div>
            <div className="text-sm">Significant</div>
          </div>
          <div className="border p-4 rounded">
            <div className="text-3xl font-bold">{nearby?.features.length || 0}</div>
            <div className="text-sm">Within 1000km</div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Recent Significant Earthquakes</h3>
          {significant?.features.slice(0, 5).map((eq) => (
            <div key={eq.id} className="border-l-4 border-primary pl-3 mb-2">
              <div className="font-bold">M{eq.properties.mag.toFixed(1)}</div>
              <div className="text-sm">{eq.properties.place}</div>
              <div className="text-xs text-muted-foreground">
                {new Date(eq.properties.time).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate distance between two coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export default {
  BasicEarthquakeExample,
  SignificantEarthquakesExample,
  RecentEarthquakesExample,
  NearbyEarthquakesExample,
  StatisticsExample,
  CustomQueryExample,
  RegionalExample,
  CombinedExample,
};

