# 🌍 QuakeSafe API Documentation

## Overview

QuakeSafe integrates multiple APIs to provide comprehensive earthquake monitoring, safety information, and location-based services.

---

## 📡 Available APIs

### 1. **USGS Earthquake API** (Primary Data Source)
**Status:** ✅ Fully Implemented

The U.S. Geological Survey provides real-time earthquake data worldwide.

**Endpoints:**
- `https://earthquake.usgs.gov/fdsnws/event/1/query` - Query earthquakes with parameters
- `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary` - GeoJSON feeds

**Features:**
- ✅ Real-time earthquake data
- ✅ Historical earthquake queries
- ✅ Location-based filtering (radius search)
- ✅ Magnitude filtering
- ✅ Time range queries
- ✅ Tsunami warnings
- ✅ Alert levels

**Usage Examples:**

```typescript
import { usgsAPI } from '@/services/api';

// Get all recent earthquakes
const earthquakes = await usgsAPI.getEarthquakes();

// Get earthquakes near a location
const nearby = await usgsAPI.getNearbyEarthquakes(14.5995, 120.9842, 500); // Manila, 500km radius

// Get significant earthquakes (M4.5+)
const significant = await usgsAPI.getSignificantEarthquakes();

// Get earthquakes in last 24 hours
const recent = await usgsAPI.getRecentEarthquakes(24);

// Get earthquakes by region (bounding box)
const regional = await usgsAPI.getEarthquakesByRegion(
  minLat, maxLat, minLon, maxLon, minMagnitude
);
```

**React Hooks:**

```typescript
import useEarthquakeData from '@/hooks/useEarthquakeData';
import { useSignificantEarthquakes, useRecentEarthquakes } from '@/hooks/useEarthquakeData';
import useNearbyEarthquakes from '@/hooks/useNearbyEarthquakes';

// Default earthquake data
const { data, isLoading, error } = useEarthquakeData();

// Significant earthquakes
const { data } = useSignificantEarthquakes();

// Recent earthquakes (last 24 hours)
const { data } = useRecentEarthquakes(24);

// Nearby earthquakes
const { data } = useNearbyEarthquakes({
  latitude: 14.5995,
  longitude: 120.9842,
  radiusKm: 500,
  minMagnitude: 2.5,
});
```

---

### 2. **Geolocation API**
**Status:** ✅ Fully Implemented

Get user's location for personalized earthquake alerts.

**Features:**
- ✅ IP-based geolocation (no permission required)
- ✅ Browser geolocation (requires user permission)
- ✅ City, country, region information

**Usage:**

```typescript
import { geolocationAPI } from '@/services/api';
import useUserLocation, { useBrowserLocation } from '@/hooks/useUserLocation';

// IP-based location (automatic)
const location = await geolocationAPI.getUserLocation();

// Browser location (requires permission)
const position = await geolocationAPI.getBrowserLocation();

// React Hooks
const { data: ipLocation } = useUserLocation();
const { data: browserLocation, refetch } = useBrowserLocation();
```

---

### 3. **Earthquake Statistics API**
**Status:** ✅ Fully Implemented

Get statistical analysis of earthquake activity.

**Features:**
- ✅ Total earthquake count
- ✅ Average magnitude
- ✅ Max/min magnitude
- ✅ Significant earthquake count
- ✅ Tsunami-related earthquakes
- ✅ Customizable time periods

**Usage:**

```typescript
import { statisticsAPI } from '@/services/api';
import useEarthquakeStatistics from '@/hooks/useEarthquakeStatistics';

// Get statistics for last 30 days
const stats = await statisticsAPI.getStatistics(30);

// React Hook
const { data: stats } = useEarthquakeStatistics(30);

// Returns:
// {
//   total: 1234,
//   averageMagnitude: 3.2,
//   maxMagnitude: 6.5,
//   minMagnitude: 2.5,
//   significant: 15,
//   withTsunami: 2,
//   period: { start: '...', end: '...', days: 30 }
// }
```

---

### 4. **Regional Earthquake APIs**
**Status:** ⚠️ Partially Implemented (CORS limitations)

Regional earthquake monitoring agencies.

#### EMSC (European-Mediterranean Seismological Centre)
**Status:** ✅ Available

```typescript
import { regionalAPI } from '@/services/api';

const emscData = await regionalAPI.getEMSCEarthquakes({
  minmag: 3.0,
  limit: 50,
});
```

#### PHIVOLCS (Philippines)
**Status:** ⚠️ Requires Backend Proxy

The Philippine Institute of Volcanology and Seismology doesn't provide a public JSON API. Would need:
- Web scraping (not recommended)
- Backend proxy server
- Official API access (if available)

#### JMA (Japan Meteorological Agency)
**Status:** ⚠️ Requires Backend Proxy

May need CORS proxy or backend implementation.

---

## 🚀 Potential Future APIs

### 5. **Weather API** (Recommended)
**Suggested:** OpenWeatherMap API

**Why:** Weather conditions affect earthquake response and recovery.

**Implementation:**
```typescript
// Add to .env
VITE_OPENWEATHER_API_KEY=your_api_key

// Usage
const weatherAPI = {
  getCurrentWeather: async (lat: number, lon: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
    );
    return response.json();
  },
};
```

**Benefits:**
- Show weather conditions at earthquake locations
- Alert users about weather hazards during recovery
- Temperature, precipitation, wind data

---

### 6. **News API** (Recommended)
**Suggested:** NewsAPI.org

**Why:** Keep users informed about earthquake-related news.

**Implementation:**
```typescript
// Add to .env
VITE_NEWS_API_KEY=your_api_key

// Usage
const newsAPI = {
  getEarthquakeNews: async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=earthquake&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    );
    return response.json();
  },
};
```

**Benefits:**
- Latest earthquake news
- Expert analysis
- Safety updates
- Recovery information

---

### 7. **Tsunami Warning API**
**Suggested:** NOAA Tsunami Warning System

**Why:** Critical for coastal areas.

**Implementation:**
```typescript
const tsunamiAPI = {
  getWarnings: async () => {
    const response = await fetch('https://www.tsunami.gov/events/xml/PHEBxml.xml');
    const xml = await response.text();
    // Parse XML to JSON
    return parseXML(xml);
  },
};
```

**Benefits:**
- Real-time tsunami warnings
- Evacuation alerts
- Wave height predictions

---

### 8. **Social Media API** (Optional)
**Suggested:** Twitter API v2

**Why:** Real-time reports from affected areas.

**Benefits:**
- Eyewitness reports
- Damage assessments
- Community updates

---

## 📊 API Usage Best Practices

### Rate Limiting
- USGS: No strict limits, but be respectful (10-minute intervals)
- IP Geolocation: Limited free tier
- News API: 100 requests/day (free tier)
- Weather API: 60 calls/minute (free tier)

### Caching Strategy
```typescript
// Current implementation
staleTime: 5 * 60 * 1000,      // 5 minutes
refetchInterval: 10 * 60 * 1000, // 10 minutes
```

### Error Handling
```typescript
retry: 3,
retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
```

---

## 🔧 Environment Variables

Create a `.env` file:

```env
# Optional API Keys (for future implementation)
VITE_OPENWEATHER_API_KEY=your_key_here
VITE_NEWS_API_KEY=your_key_here
VITE_TWITTER_BEARER_TOKEN=your_token_here
```

---

## 📝 Implementation Checklist

### Currently Implemented ✅
- [x] USGS Earthquake API
- [x] Geolocation API (IP-based)
- [x] Browser Geolocation
- [x] Earthquake Statistics
- [x] Nearby Earthquakes
- [x] Significant Earthquakes
- [x] Recent Earthquakes
- [x] EMSC Regional API

### Recommended Next Steps 🎯
- [ ] Weather API integration
- [ ] News API integration
- [ ] Tsunami Warning API
- [ ] Backend proxy for regional APIs (PHIVOLCS, JMA)
- [ ] Push notifications for significant earthquakes
- [ ] Email/SMS alerts

---

## 🌐 API Service Architecture

```
src/
├── services/
│   └── api.ts              # Centralized API service
├── hooks/
│   ├── useEarthquakeData.ts
│   ├── useNearbyEarthquakes.ts
│   ├── useUserLocation.ts
│   └── useEarthquakeStatistics.ts
└── config/
    └── countries.ts        # Regional data sources
```

---

## 📚 Additional Resources

- [USGS API Documentation](https://earthquake.usgs.gov/fdsnws/event/1/)
- [EMSC API Documentation](https://www.seismicportal.eu/fdsn-wsevent.html)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [NOAA Tsunami Warnings](https://www.tsunami.gov/)

---

**Last Updated:** 2025-10-11

