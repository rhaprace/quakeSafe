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

## Data Sources

- **USGS Earthquake Hazards Program**: Real-time earthquake data
- **FEMA**: Emergency preparedness guidelines
- **Ready.gov**: National preparedness resources

## Features

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
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
