# QuakeSafe 

A comprehensive earthquake monitoring and preparedness web application built with React, TypeScript, and modern web technologies.

## Features

- ** Real-time Earthquake Tracking**: Live earthquake data from the U.S. Geological Survey (USGS)
- ** Interactive Map**: Visual earthquake monitoring with Leaflet maps
- ** Preparedness Guides**: Comprehensive earthquake safety information
- ** Emergency Resources**: Quick access to emergency contacts and resources
- ** Dark Mode Support**: Beautiful light and dark theme toggle
- ** Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Query** - Data fetching and caching
- **React Leaflet** - Interactive maps
- **Zustand** - State management
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quakesafe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # App footer
│   ├── EarthquakeCard.tsx    # Earthquake info card
│   └── EarthquakeMap.tsx     # Interactive map component
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Tracker.tsx     # Earthquake tracking page
│   ├── Guides.tsx      # Preparedness guides
│   ├── Resources.tsx   # Emergency resources
│   └── About.tsx       # About page
├── hooks/              # Custom React hooks
│   └── useEarthquakeData.ts  # USGS API data fetching
├── store/              # State management
│   └── useThemeStore.ts      # Theme toggle store
├── utils/              # Utility functions
│   └── formatDate.ts   # Date formatting helpers
└── lib/                # Library configurations
    └── utils.ts        # Utility functions
```

## Data Sources

- **USGS Earthquake Hazards Program**: Real-time earthquake data
- **FEMA**: Emergency preparedness guidelines
- **Ready.gov**: National preparedness resources

## Features Details

### Real-time Earthquake Monitoring
- Fetches live data from USGS every 10 minutes
- Displays earthquakes with magnitude 2.5+
- Shows location, magnitude, depth, and timestamp
- Automatic data refresh with error handling

### Interactive Map
- Built with Leaflet and React Leaflet
- Color-coded markers by earthquake magnitude
- Clickable markers with detailed information
- Responsive map controls

### Comprehensive Guides
- Before earthquake preparedness
- During earthquake safety (Drop, Cover, Hold On)
- After earthquake response
- Emergency kit essentials
- Building safety tips
- Community preparedness

### Emergency Resources
- Emergency hotline numbers
- Government agency links
- Local resource information
- Volunteer organization contacts

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This application provides earthquake information for educational and preparedness purposes. In case of emergency, always contact local emergency services first. The data is sourced from USGS and may have delays or inaccuracies.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- U.S. Geological Survey for earthquake data
- FEMA for preparedness guidelines
- OpenStreetMap contributors for map tiles
- The React and open source community
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
