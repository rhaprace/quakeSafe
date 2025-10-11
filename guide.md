Step 1 — Header Component

Goal: Create a responsive header with navigation links and a dark mode toggle.
Copilot Prompt:

“Create a Header.tsx using shadcn/ui components and Tailwind. Include site name (‘QuakeSafe’), navigation links (Home, Tracker, Guides, Resources, About), and a theme toggle button.”

Step 2 — Footer Component

Goal: Simple footer with © year, name, and quick links.
Copilot Prompt:

“Generate Footer.tsx that displays © QuakeSafe {currentYear}, with links to privacy, terms, and contact.”

Step 3 — Home Page

Goal: Show hero section and key categories.
Copilot Prompt:

“Create a Home.tsx page with a hero banner (‘Be Ready Before It Strikes’), subtext, and four clickable cards: Before, During, After, Emergency Kit. Use shadcn Card components.”

Step 4 — useEarthquakeData Hook

Goal: Fetch and store real-time earthquake data from the USGS API.
Copilot Prompt:

“Implement useEarthquakeData.ts that fetches recent earthquakes from https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20
, parses JSON, and returns data + loading + error states via React Query.”

Step 5 — EarthquakeMap Component

Goal: Display a map with earthquake markers.
Copilot Prompt:

“Create EarthquakeMap.tsx using react-leaflet. Show markers for earthquakes with tooltips for magnitude, place, and time.”

Step 6 — EarthquakeCard Component

Goal: Display summary info for each event.
Copilot Prompt:

“Create EarthquakeCard.tsx showing location, magnitude, date/time, and ‘View on Map’ button using shadcn Card + Badge components.”

Step 7 — Tracker Page

Goal: Display list of earthquakes and the map.
Copilot Prompt:

“Build Tracker.tsx page that renders EarthquakeMap on top and EarthquakeCard list below using useEarthquakeData.”

Step 8 — Guides Page

Goal: Show preparedness information.
Copilot Prompt:

“Generate Guides.tsx using shadcn Accordion with sections: Before an Earthquake, During, After, Emergency Kit, Building Safety Tips. Each section has short informative text.”

Step 9 — Resources Page

Goal: Provide community and emergency links.
Copilot Prompt:

“Create Resources.tsx page listing local emergency hotlines, government agencies, shelters, and volunteer programs. Use cards and link buttons.”

Step 10 — About Page

Goal: Inform visitors about the site’s mission.
Copilot Prompt:

“Build About.tsx describing QuakeSafe’s purpose, data sources (USGS), and disclaimer.”

Step 11 — Theme Store

Goal: Manage dark/light theme state.
Copilot Prompt:

“In /store/useThemeStore.ts, create a Zustand store that toggles between dark and light themes. Sync with localStorage.”

Step 12 — Routing Setup

Copilot Prompt:

“In App.tsx, implement BrowserRouter with routes for Home, Tracker, Guides, Resources, About. Include Header and Footer globally.”

Step 13 — UI Polish

Copilot Prompt:

“Add loading skeletons for earthquake data using shadcn Skeleton component.”
“Ensure responsive layout for mobile, tablet, desktop.”
“Apply shadcn typography styles for readable content.”

Step 14 — Optional Add-ons

PWA setup for offline support (vite-plugin-pwa)

Push notifications for new earthquakes

Localization (English + Filipino)

🚀 Deployment Instructions

Copilot Prompt:

“Configure Vercel deployment. Ensure base URL works with React Router. Add environment variable for USGS API base URL if needed.”

✅ Quality Checklist

 All pages responsive

 Dark/light mode toggle functional

 Earthquake API fetch stable

 Map markers load correctly

 Guides and Resources readable on mobile

 SEO meta tags and OpenGraph set

 Lighthouse score above 90