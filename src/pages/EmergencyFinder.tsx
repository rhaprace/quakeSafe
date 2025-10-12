import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Search, Phone, Hospital, Shield, AlertTriangle, Building2, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  philippinesCities,
  searchCities,
  type CityEmergencyData,
} from '@/data/philippines-regions';
import 'leaflet/dist/leaflet.css';


const emergencyIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNCIgZmlsbD0iI2VmNDQ0NCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+TjTwvdGV4dD48L3N2Zz4=',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const MapViewController = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const EmergencyFinder = () => {
  const [selectedCity, setSelectedCity] = useState<CityEmergencyData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.8797, 121.7740]); // Philippines center
  const [mapZoom, setMapZoom] = useState(6);

  const handleCitySelect = (city: CityEmergencyData) => {
    setSelectedCity(city);
    setSearchQuery('');
    setMapCenter(city.coordinates);
    setMapZoom(12);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const searchResults = searchQuery ? searchCities(searchQuery) : [];

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'HOSPITAL':
        return <Hospital className="h-4 w-4" />;
      case 'FIRE':
        return <AlertTriangle className="h-4 w-4" />;
      case 'POLICE':
        return <Shield className="h-4 w-4" />;
      case 'DISASTER':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Phone className="h-4 w-4" />;
    }
  };

  const getContactColor = (type: string) => {
    switch (type) {
      case 'HOSPITAL':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900';
      case 'FIRE':
        return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/20 dark:text-orange-400 dark:border-orange-900';
      case 'POLICE':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900';
      case 'DISASTER':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/20 dark:text-yellow-400 dark:border-yellow-900';
      default:
        return 'bg-primary/5 text-primary border-primary/20';
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-background border-b px-4 py-4 lg:px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-2">Regional Emergency Finder</h1>
          <p className="text-sm text-muted-foreground">
            Click on any city marker on the map to view local emergency resources
          </p>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 right-4 z-[1000] max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search city or province..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-11 pr-11 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm bg-background/95 backdrop-blur"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {searchResults.length > 0 && (
              <div className="mt-2 bg-background/95 backdrop-blur border rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {searchResults.map((city) => (
                  <button
                    key={`${city.city}-${city.province}`}
                    onClick={() => handleCitySelect(city)}
                    className="w-full text-left p-3 hover:bg-muted/50 transition-colors border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{city.city}</div>
                        <div className="text-xs text-muted-foreground">{city.province}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            className="h-full w-full"
            zoomControl={true}
          >
            <MapViewController center={mapCenter} zoom={mapZoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {philippinesCities.map((city) => (
              <Marker
                key={`${city.city}-${city.province}`}
                position={city.coordinates}
                icon={emergencyIcon}
                eventHandlers={{
                  click: () => handleCitySelect(city),
                }}
              >
                <Popup>
                  <div className="p-2">
                    <div className="font-bold text-base mb-1">{city.city}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{city.province}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Click marker for emergency contacts →
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {selectedCity && (
          <div className="w-full lg:w-[500px] xl:w-[600px] bg-background border-l flex flex-col">
            <div className="p-4 flex-1 flex flex-col overflow-hidden">
              <div className="border-b pb-3 mb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 bg-muted rounded-md">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{selectedCity.city}</h2>
                      <p className="text-xs text-muted-foreground">
                        {selectedCity.province} • {selectedCity.region}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setSelectedCity(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <div className="bg-muted/30 rounded-lg p-3 border">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs mb-1.5">
                        {selectedCity.localGovernment.name}
                      </div>
                      {selectedCity.localGovernment.hotline && (
                        <a
                          href={`tel:${selectedCity.localGovernment.hotline}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                        >
                          <Phone className="h-3 w-3" />
                          {selectedCity.localGovernment.hotline}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground mb-2">Emergency Contacts</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCity.contacts.map((contact, index) => (
                      <a
                        key={index}
                        href={`tel:${contact.number}`}
                        className="group border rounded-lg p-2.5 hover:bg-muted/50 transition-colors block"
                      >
                        <div className="flex items-start gap-2">
                          <div className={`p-1.5 rounded-md ${getContactColor(contact.type)}`}>
                            {getContactIcon(contact.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                              {contact.type}
                            </div>
                            <div className="font-medium text-xs mb-1 text-foreground/90 line-clamp-1">
                              {contact.name}
                            </div>
                            <div className="text-xs font-mono text-primary">
                              {contact.number}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground mb-2">Hospitals</h3>
                    <div className="space-y-1.5">
                      {selectedCity.hospitals.map((hospital, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 border rounded-md hover:bg-muted/30 transition-colors"
                        >
                          <Hospital className="h-3 w-3 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/80 leading-tight">{hospital}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground mb-2">Evacuation Centers</h3>
                    <div className="space-y-1.5">
                      {selectedCity.evacuationCenters.map((center, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 border rounded-md hover:bg-muted/30 transition-colors"
                        >
                          <MapPin className="h-3 w-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/80 leading-tight">{center}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 border rounded-lg p-3 mt-auto">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-[11px] text-muted-foreground leading-relaxed">
                      <p className="font-medium mb-1">Important Reminder</p>
                      <p>
                        Always call <span className="font-mono font-semibold text-foreground">911</span> first in emergencies.
                        Verify these numbers before an emergency occurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyFinder;

