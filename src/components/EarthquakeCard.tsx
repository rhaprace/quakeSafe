import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import type { EarthquakeFeature } from '@/hooks/useEarthquakeData';
import { formatDate } from '@/utils/formatDate';

interface EarthquakeCardProps {
  earthquake: EarthquakeFeature;
  onViewMap?: (earthquake: EarthquakeFeature) => void;
}

const getMagnitudeBadgeColor = (magnitude: number) => {
  if (magnitude < 3) return 'bg-green-100 text-green-800 hover:bg-green-200';
  if (magnitude < 5) return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
  if (magnitude < 6) return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
  return 'bg-red-100 text-red-800 hover:bg-red-200';
};

const EarthquakeCard = ({ earthquake, onViewMap }: EarthquakeCardProps) => {
  const { properties, geometry } = earthquake;
  const [longitude, latitude, depth] = geometry.coordinates;
  
  const handleViewOnMap = () => {
    if (onViewMap) {
      onViewMap(earthquake);
    }
  };

  const handleViewDetails = () => {
    window.open(properties.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">
            {properties.place}
          </CardTitle>
          <Badge
            className={`ml-2 flex-shrink-0 ${getMagnitudeBadgeColor(properties.mag)}`}
          >
            M {properties.mag.toFixed(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>
              {latitude.toFixed(3)}°, {longitude.toFixed(3)}° 
              {depth && ` • ${depth.toFixed(1)}km depth`}
            </span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{formatDate(properties.time)}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {properties.tsunami === 1 && (
              <Badge variant="destructive" className="w-fit">
                Tsunami Warning
              </Badge>
            )}
            {properties.alert && (
              <Badge variant="outline" className="w-fit capitalize">
                {properties.alert} Alert
              </Badge>
            )}
          </div>
        </div>
        <div className={`grid gap-2 pt-4 mt-auto ${onViewMap ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {onViewMap && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewOnMap}
              className="w-full justify-center"
            >
              <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">View on Map</span>
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewDetails}
            className="w-full justify-center"
          >
            <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="truncate">Details</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarthquakeCard;
