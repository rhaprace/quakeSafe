import { useState } from 'react';
import { Search, MapPin, Phone, Building2, Hospital, Shield, AlertTriangle, X, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  philippinesRegions,
  getCitiesByRegion,
  searchCities,
  type CityEmergencyData,
} from '@/data/philippines-regions';

const RegionalEmergencyFinder = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<CityEmergencyData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRegionChange = (regionCode: string) => {
    setSelectedRegion(regionCode);
    setSelectedCity(null);
    setSearchQuery('');
  };

  const handleCitySelect = (city: CityEmergencyData) => {
    setSelectedCity(city);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedRegion('');
  };

  const handleReset = () => {
    setSelectedCity(null);
    setSelectedRegion('');
    setSearchQuery('');
  };

  const citiesToDisplay = searchQuery
    ? searchCities(searchQuery)
    : selectedRegion
    ? getCitiesByRegion(selectedRegion)
    : [];

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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          🏙️ Find Your Local Emergency Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get instant access to emergency contacts, hospitals, and evacuation centers in your area
        </p>
      </div>

      {!selectedCity ? (
        <>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search your city or province (e.g., Manila, Cebu, Davao)..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
          {!searchQuery && !selectedRegion && (
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-sm text-muted-foreground mb-6">
                Or browse by region
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {philippinesRegions.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => handleRegionChange(region.code)}
                    className="group p-4 border-2 rounded-xl hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-left"
                  >
                    <div className="font-bold text-primary mb-1 text-lg">{region.code}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2 leading-tight">
                      {region.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {citiesToDisplay.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-xl">
                  {searchQuery ? `Results for "${searchQuery}"` : `Cities in ${selectedRegion}`}
                </h3>
                <Button variant="ghost" size="sm" onClick={handleReset}>
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {citiesToDisplay.map((city) => (
                  <button
                    key={`${city.city}-${city.province}`}
                    onClick={() => handleCitySelect(city)}
                    className="group text-left p-6 border-2 rounded-xl hover:border-primary hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="font-bold text-lg mb-1">{city.city}</div>
                    <div className="text-sm text-muted-foreground">{city.province}</div>
                    <div className="mt-3 text-xs text-primary font-medium">
                      View {city.contacts.length} emergency contacts →
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {searchQuery && citiesToDisplay.length === 0 && (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="p-4 bg-muted/50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No cities found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any cities matching "{searchQuery}"
              </p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear search
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCity(null)}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to search
            </Button>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{selectedCity.city}</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {selectedCity.province} • {selectedCity.region}
                  </p>
                  <div className="bg-background/80 backdrop-blur rounded-xl p-5 border">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">
                          {selectedCity.localGovernment.name}
                        </div>
                        {selectedCity.localGovernment.hotline && (
                          <a
                            href={`tel:${selectedCity.localGovernment.hotline}`}
                            className="inline-flex items-center gap-2 text-primary hover:underline font-mono font-bold text-lg"
                          >
                            <Phone className="h-4 w-4" />
                            {selectedCity.localGovernment.hotline}
                          </a>
                        )}
                        {selectedCity.localGovernment.address && (
                          <div className="text-sm text-muted-foreground mt-2">
                            📍 {selectedCity.localGovernment.address}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-6">📞 Emergency Contacts</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {selectedCity.contacts.map((contact, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-xl p-5 transition-all hover:shadow-lg ${getContactColor(contact.type)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-background/50 rounded-lg">
                      {getContactIcon(contact.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wide mb-1 opacity-70">
                        {contact.type}
                      </div>
                      <div className="font-semibold mb-2 leading-tight">
                        {contact.name}
                      </div>
                      <a
                        href={`tel:${contact.number}`}
                        className="inline-block text-xl font-mono font-bold hover:underline mb-2"
                      >
                        {contact.number}
                      </a>
                      {contact.address && (
                        <div className="text-xs opacity-70 mt-2">
                          📍 {contact.address}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">🏥 Major Hospitals</h4>
              <div className="space-y-3">
                {selectedCity.hospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border-2 rounded-xl bg-red-50/50 dark:bg-red-950/10 border-red-200 dark:border-red-900"
                  >
                    <Hospital className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <span className="font-medium">{hospital}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">🏢 Evacuation Centers</h4>
              <div className="space-y-3">
                {selectedCity.evacuationCenters.map((center, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border-2 rounded-xl bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-900"
                  >
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="font-medium">{center}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-300 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <div className="text-sm text-yellow-900 dark:text-yellow-200">
                <p className="font-bold text-base mb-2">⚠️ Important Reminder</p>
                <p className="leading-relaxed">
                  In case of emergency, always call <strong className="font-mono text-base">911</strong> first.
                  The information provided here is for reference only. Please verify contact numbers before an emergency occurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionalEmergencyFinder;

