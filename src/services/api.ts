export const API_ENDPOINTS = {
  USGS: 'https://earthquake.usgs.gov/fdsnws/event/1/query',
  USGS_GEOJSON: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary',
  PHIVOLCS: 'https://earthquake.phivolcs.dost.gov.ph/2010EQLatest/LatestEarthquake.html',
  JMA: 'https://www.jma.go.jp/bosai/quake/data/list.json',
  EMSC: 'https://www.seismicportal.eu/fdsnws/event/1/query',

  OPEN_WEATHER: 'https://api.openweathermap.org/data/2.5',

  NEWS_API: 'https://newsapi.org/v2',

  NOAA_TSUNAMI: 'https://www.tsunami.gov/events/xml/PHEBxml.xml',

  IP_GEOLOCATION: 'https://ipapi.co/json',
} as const;

export interface USGSQueryParams {
  format?: 'geojson' | 'xml' | 'csv';
  starttime?: string;
  endtime?: string;
  minmagnitude?: number;
  maxmagnitude?: number;
  mindepth?: number;
  maxdepth?: number;
  minlatitude?: number;
  maxlatitude?: number;
  minlongitude?: number;
  maxlongitude?: number;
  latitude?: number;
  longitude?: number;
  maxradius?: number;
  maxradiuskm?: number;
  limit?: number;
  offset?: number;
  orderby?: 'time' | 'time-asc' | 'magnitude' | 'magnitude-asc';
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildQueryString = (params: Record<string, any>): string => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });

  return queryParams.toString();
};

export const usgsAPI = {
  getEarthquakes: async (params: USGSQueryParams = {}) => {
    const defaultParams: USGSQueryParams = {
      format: 'geojson',
      limit: 50,
      minmagnitude: 2.5,
      orderby: 'time',
    };

    const queryString = buildQueryString({ ...defaultParams, ...params });
    const url = `${API_ENDPOINTS.USGS}?${queryString}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`USGS API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
  getNearbyEarthquakes: async (
    latitude: number,
    longitude: number,
    radiusKm: number = 500,
    minMagnitude: number = 2.5
  ) => {
    return usgsAPI.getEarthquakes({
      latitude,
      longitude,
      maxradiuskm: radiusKm,
      minmagnitude: minMagnitude,
      limit: 100,
    });
  },
  getSignificantEarthquakes: async () => {
    return usgsAPI.getEarthquakes({
      minmagnitude: 4.5,
      limit: 100,
    });
  },
  getRecentEarthquakes: async (hours: number = 24) => {
    const endtime = new Date();
    const starttime = new Date(endtime.getTime() - hours * 60 * 60 * 1000);

    return usgsAPI.getEarthquakes({
      starttime: starttime.toISOString(),
      endtime: endtime.toISOString(),
      orderby: 'time',
    });
  },
  getEarthquakesByRegion: async (
    minLat: number,
    maxLat: number,
    minLon: number,
    maxLon: number,
    minMagnitude: number = 2.5
  ) => {
    return usgsAPI.getEarthquakes({
      minlatitude: minLat,
      maxlatitude: maxLat,
      minlongitude: minLon,
      maxlongitude: maxLon,
      minmagnitude: minMagnitude,
    });
  },
};

export const geolocationAPI = {
  getUserLocation: async () => {
    try {
      const response = await fetch(API_ENDPOINTS.IP_GEOLOCATION);
      if (!response.ok) {
        throw new Error('Failed to get location');
      }
      return response.json();
    } catch (error) {
      console.error('Geolocation error:', error);
      return null;
    }
  },
  getBrowserLocation: (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    });
  },
};
export const regionalAPI = {
  getPhilippinesEarthquakes: async () => {
    console.warn('PHIVOLCS API not directly accessible - would need backend implementation');
    return null;
  },
  getJapanEarthquakes: async () => {
    console.warn('JMA API might need CORS proxy - would need backend implementation');
    return null;
  },
  getEMSCEarthquakes: async (params: USGSQueryParams = {}) => {
    const defaultParams = {
      format: 'json',
      limit: 50,
      minmag: 2.5,
    };

    const queryString = buildQueryString({ ...defaultParams, ...params });
    const url = `${API_ENDPOINTS.EMSC}?${queryString}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`EMSC API Error: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('EMSC API error:', error);
      return null;
    }
  },
};

export const statisticsAPI = {
  getStatistics: async (days: number = 30) => {
    const endtime = new Date();
    const starttime = new Date(endtime.getTime() - days * 24 * 60 * 60 * 1000);

    const data = await usgsAPI.getEarthquakes({
      starttime: starttime.toISOString(),
      endtime: endtime.toISOString(),
      limit: 10000,
    });
    const features = data.features || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const magnitudes = features.map((f: any) => f.properties.mag);

    return {
      total: features.length,
      averageMagnitude: magnitudes.reduce((a: number, b: number) => a + b, 0) / magnitudes.length || 0,
      maxMagnitude: Math.max(...magnitudes, 0),
      minMagnitude: Math.min(...magnitudes, 10),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      significant: features.filter((f: any) => f.properties.mag >= 4.5).length,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      withTsunami: features.filter((f: any) => f.properties.tsunami === 1).length,
      period: {
        start: starttime.toISOString(),
        end: endtime.toISOString(),
        days,
      },
    };
  },
};

export default {
  usgs: usgsAPI,
  geolocation: geolocationAPI,
  regional: regionalAPI,
  statistics: statisticsAPI,
};
