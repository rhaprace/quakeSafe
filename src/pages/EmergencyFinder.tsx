import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Hospital, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import {
  philippinesCities,
  searchCities,
  type CityEmergencyData,
} from '@/data/philippines-regions';
import { createEmergencyIcon } from '@/utils/emergency-finder/map-config';
import {
  SearchBar,
  CitySearchResults,
  EmergencyContactCard,
  LocalGovernmentCard,
  ResourceListItem,
  CityDetailsHeader,
  EmergencyDisclaimerBox,
  MapViewController,
} from '@/components/emergency-finder';
import { getEmergencyFinderSEO } from '@/utils/seo';
import 'leaflet/dist/leaflet.css';

const emergencyIcon = createEmergencyIcon();

const EmergencyFinder: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityEmergencyData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.8797, 121.7740]);
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

  return (
    <>
      <SEO {...getEmergencyFinderSEO()} />
      <div className="h-screen flex flex-col">
        <div className="bg-background border-b px-4 py-4 lg:px-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-2">Regional Emergency Finder</h1>
          <p className="text-sm text-muted-foreground">
            Click on any city marker on the map to view local emergency resources
          </p>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 right-4 z-[1000] max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={handleSearch}
              onClear={() => setSearchQuery('')}
              placeholder="Search city or province..."
            />
            <CitySearchResults
              results={searchResults}
              onSelect={handleCitySelect}
            />
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
          <div className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-[500px] xl:w-[600px] bg-background lg:border-l flex flex-col z-[1001]">
            <div className="p-4 flex-1 flex flex-col overflow-hidden">
              <CityDetailsHeader
                city={selectedCity.city}
                province={selectedCity.province}
                region={selectedCity.region}
                onClose={() => setSelectedCity(null)}
              />
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <LocalGovernmentCard
                  name={selectedCity.localGovernment.name}
                  hotline={selectedCity.localGovernment.hotline}
                  address={selectedCity.localGovernment.address}
                />
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground mb-2">Emergency Contacts</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCity.contacts.map((contact, index) => (
                      <EmergencyContactCard key={index} contact={contact} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground mb-2">Hospitals</h3>
                    <div className="space-y-1.5">
                      {selectedCity.hospitals.map((hospital, index) => (
                        <ResourceListItem
                          key={index}
                          icon={Hospital}
                          iconColor="text-red-600 dark:text-red-400"
                          text={hospital}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground mb-2">Evacuation Centers</h3>
                    <div className="space-y-1.5">
                      {selectedCity.evacuationCenters.map((center, index) => (
                        <ResourceListItem
                          key={index}
                          icon={MapPin}
                          iconColor="text-blue-600 dark:text-blue-400"
                          text={center}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <EmergencyDisclaimerBox className="mt-auto" />
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default EmergencyFinder;

