import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CityDetailsHeaderProps {
  city: string;
  province: string;
  region: string;
  onClose: () => void;
  className?: string;
}

export const CityDetailsHeader: React.FC<CityDetailsHeaderProps> = ({
  city,
  province,
  region,
  onClose,
  className = '',
}) => {
  return (
    <div className={`border-b pb-3 mb-3 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="p-1.5 bg-muted rounded-md flex-shrink-0">
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold truncate">{city}</h2>
            <p className="text-xs text-muted-foreground truncate">
              {province} • {region}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CityDetailsHeader;

