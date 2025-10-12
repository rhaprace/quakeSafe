import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import EarthquakeMap from '@/components/EarthquakeMap';
import EarthquakeCard from '@/components/EarthquakeCard';
import { type EarthquakeFeature } from '@/hooks/useEarthquakeData';
import { useMultiSourceEarthquakeData } from '@/hooks/useMultiSourceEarthquakeData';
import { RefreshCw, MapPin, List, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Tracker = () => {
  const { t } = useTranslation('tracker');
  const { data, isLoading, error, refetch, isRefetching } = useMultiSourceEarthquakeData();
  const [selectedEarthquake, setSelectedEarthquake] = useState<EarthquakeFeature | null>(null);
  const [view, setView] = useState<'map' | 'list' | 'both'>('both');

  const handleViewOnMap = (earthquake: EarthquakeFeature) => {
    setSelectedEarthquake(earthquake);
    setView('map');
  };

  const handleRefresh = () => {
    refetch();
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertDescription>
            {t('error')}
            <Button
              onClick={handleRefresh}
              variant="outline"
              size="sm"
              className="ml-2"
            >
              {t('common:buttons.retry')}
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
          <p className="text-muted-foreground mt-2 flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {t('multiSource')}
            {data && (
              <span className="ml-2">
                • {data.features.length} {t('recentCount')}
              </span>
            )}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex border rounded-lg p-1">
            <Button
              variant={view === 'map' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('map')}
            >
              <MapPin className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'both' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('both')}
            >
              {t('views.both')}
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="sm"
            disabled={isRefetching}
          >
            <RefreshCw className={`h-4 w-4 ${isRefetching ? 'animate-spin' : ''}`} />
            <span className="ml-2 hidden sm:inline">{t('common:buttons.refresh')}</span>
          </Button>
        </div>
      </div>
      {isLoading && (
        <div className="space-y-6">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-lg" />
            ))}
          </div>
        </div>
      )}
      {data && (
        <div className="space-y-6">
          {(view === 'map' || view === 'both') && (
            <div>
              <EarthquakeMap
                earthquakes={data.features}
                selectedEarthquake={selectedEarthquake}
                height="500px"
              />
              {selectedEarthquake && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{t('selectedEarthquake')}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedEarthquake.properties.place}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedEarthquake(null)}
                    >
                      {t('common:buttons.clear')}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
          {(view === 'list' || view === 'both') && (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('recentEarthquakes')}</h2>
              {data.features.length === 0 ? (
                <Alert>
                  <AlertDescription>
                    {t('noEarthquakesFound')}
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                  {data.features
                    .sort((a, b) => b.properties.time - a.properties.time)
                    .map((earthquake) => (
                      <EarthquakeCard
                        key={earthquake.id}
                        earthquake={earthquake}
                        onViewMap={handleViewOnMap}
                      />
                    ))}
                </div>
              )}
            </div>
          )}
          {data.metadata && (
            <div className="text-center text-sm text-muted-foreground">
              Last updated: {new Date(data.metadata.generated).toLocaleString()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tracker;
