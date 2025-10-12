import { useQuery } from '@tanstack/react-query';
import { usgsAPI } from '@/services/api';
import type { EarthquakeFeature, EarthquakeResponse } from './useEarthquakeData';

const GEONET_API = 'https://api.geonet.org.nz/quake';
const BMKG_API = 'https://data.bmkg.go.id/DataMKG/TEWS';

interface GeoNetQuake {
  publicID: string;
  time: string;
  depth: number;
  magnitude: number;
  latitude: number;
  longitude: number;
  locality: string;
  mmi?: number;
  quality: string;
}

interface BMKGQuake {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Potensi: string;
}

const convertGeoNetToUSGS = (quake: GeoNetQuake): EarthquakeFeature => {
  return {
    type: 'Feature',
    id: quake.publicID,
    properties: {
      mag: quake.magnitude,
      place: quake.locality || 'New Zealand region',
      time: new Date(quake.time).getTime(),
      updated: new Date(quake.time).getTime(),
      url: `https://www.geonet.org.nz/earthquake/${quake.publicID}`,
      detail: '',
      status: 'reviewed',
      tsunami: 0,
      sig: Math.round(quake.magnitude * 100),
      net: 'geonet',
      code: quake.publicID,
      ids: quake.publicID,
      sources: 'geonet',
      types: 'origin',
      rms: 0,
      magType: 'M',
      type: 'earthquake',
      title: `M ${quake.magnitude} - ${quake.locality}`,
    },
    geometry: {
      type: 'Point',
      coordinates: [quake.longitude, quake.latitude, quake.depth],
    },
  };
};

const convertBMKGToUSGS = (quake: BMKGQuake): EarthquakeFeature | null => {
  try {
    const [lat, lon] = quake.Coordinates.split(',').map(s => parseFloat(s.trim()));
    const magnitude = parseFloat(quake.Magnitude);
    const depth = parseFloat(quake.Kedalaman.replace(' km', ''));
    const dateTime = new Date(quake.DateTime).getTime();

    if (isNaN(lat) || isNaN(lon) || isNaN(magnitude)) {
      return null;
    }

    return {
      type: 'Feature',
      id: `bmkg_${dateTime}_${magnitude}`,
      properties: {
        mag: magnitude,
        place: quake.Wilayah || 'Indonesia region',
        time: dateTime,
        updated: dateTime,
        url: 'https://www.bmkg.go.id/',
        detail: '',
        status: 'reviewed',
        tsunami: quake.Potensi?.toLowerCase().includes('tsunami') ? 1 : 0,
        sig: Math.round(magnitude * 100),
        net: 'bmkg',
        code: `${dateTime}`,
        ids: `bmkg_${dateTime}`,
        sources: 'bmkg',
        types: 'origin',
        rms: 0,
        magType: 'M',
        type: 'earthquake',
        title: `M ${magnitude} - ${quake.Wilayah}`,
      },
      geometry: {
        type: 'Point',
        coordinates: [lon, lat, depth],
      },
    };
  } catch (error) {
    console.error('Error converting BMKG quake:', error);
    return null;
  }
};

const fetchGeoNetEarthquakes = async (): Promise<EarthquakeFeature[]> => {
  try {
    const response = await fetch(`${GEONET_API}?MMI=2`);
    if (!response.ok) return [];
    
    const data: { features: GeoNetQuake[] } = await response.json();
    return data.features.map(convertGeoNetToUSGS);
  } catch (error) {
    console.error('GeoNet API error:', error);
    return [];
  }
};


const fetchBMKGEarthquakes = async (): Promise<EarthquakeFeature[]> => {
  try {
    const response = await fetch(`${BMKG_API}/autogempa.json`);
    if (!response.ok) return [];

    const data: { Infogempa: { gempa: BMKGQuake | BMKGQuake[] } } = await response.json();

    // BMKG API returns a single object, not an array
    const gempaData = data.Infogempa?.gempa;
    if (!gempaData) return [];

    // Convert to array if it's a single object
    const quakes = Array.isArray(gempaData) ? gempaData : [gempaData];

    return quakes
      .map(convertBMKGToUSGS)
      .filter((q): q is EarthquakeFeature => q !== null);
  } catch (error) {
    console.error('BMKG API error:', error);
    return [];
  }
};


const fetchMultiSourceEarthquakes = async (): Promise<EarthquakeResponse> => {
  try {
    const [usgsData, geonetQuakes, bmkgQuakes] = await Promise.allSettled([
      usgsAPI.getEarthquakes({ limit: 100, minmagnitude: 2.5 }),
      fetchGeoNetEarthquakes(),
      fetchBMKGEarthquakes(),
    ]);
    const allFeatures: EarthquakeFeature[] = [];
    if (usgsData.status === 'fulfilled' && usgsData.value?.features) {
      allFeatures.push(...usgsData.value.features);
    }
    if (geonetQuakes.status === 'fulfilled') {
      allFeatures.push(...geonetQuakes.value);
    }
    if (bmkgQuakes.status === 'fulfilled') {
      allFeatures.push(...bmkgQuakes.value);
    }
    const uniqueFeatures = allFeatures.filter((feature, index, self) => {
      return index === self.findIndex((f) => {
        const timeDiff = Math.abs(f.properties.time - feature.properties.time);
        const [lon1, lat1] = f.geometry.coordinates;
        const [lon2, lat2] = feature.geometry.coordinates;
        const distance = Math.sqrt(
          Math.pow(lon1 - lon2, 2) + Math.pow(lat1 - lat2, 2)
        );
        return timeDiff < 60000 && distance < 0.1;
      });
    });
    uniqueFeatures.sort((a, b) => b.properties.time - a.properties.time);

    return {
      type: 'FeatureCollection',
      metadata: {
        generated: Date.now(),
        url: 'multi-source',
        title: 'Multi-Source Earthquake Data',
        status: 200,
        api: 'aggregated',
        count: uniqueFeatures.length,
      },
      features: uniqueFeatures,
    };
  } catch (error) {
    console.error('Multi-source fetch error:', error);
    throw error;
  }
};

/**
 * Hook to fetch earthquake data from multiple sources
 * Combines USGS, GeoNet (NZ), and BMKG (Indonesia) for better coverage
 */
export const useMultiSourceEarthquakeData = () => {
  return useQuery<EarthquakeResponse>({
    queryKey: ['earthquakes', 'multi-source'],
    queryFn: fetchMultiSourceEarthquakes,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export default useMultiSourceEarthquakeData;

