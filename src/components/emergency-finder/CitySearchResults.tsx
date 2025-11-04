import { MapPin } from 'lucide-react';
import type { CityEmergencyData } from '@/data/philippines-regions';

interface CitySearchResultsProps {
  results: CityEmergencyData[];
  onSelect: (city: CityEmergencyData) => void;
  className?: string;
}

export const CitySearchResults: React.FC<CitySearchResultsProps> = ({
  results,
  onSelect,
  className = '',
}) => {
  if (results.length === 0) return null;

  return (
    <div className={`mt-2 bg-background/95 backdrop-blur border rounded-lg shadow-lg max-h-64 overflow-y-auto ${className}`}>
      {results.map((city) => (
        <button
          key={`${city.city}-${city.province}`}
          onClick={() => onSelect(city)}
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
  );
};

export default CitySearchResults;

