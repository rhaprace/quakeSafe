import { Building2, Phone } from 'lucide-react';

interface LocalGovernmentCardProps {
  name: string;
  hotline?: string;
  address?: string;
  className?: string;
}

export const LocalGovernmentCard: React.FC<LocalGovernmentCardProps> = ({
  name,
  hotline,
  address,
  className = '',
}) => {
  return (
    <div className={`bg-muted/30 rounded-lg p-3 border ${className}`}>
      <div className="flex items-start gap-2">
        <Building2 className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-xs mb-1.5">{name}</div>
          {hotline && (
            <a
              href={`tel:${hotline}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
            >
              <Phone className="h-3 w-3" />
              {hotline}
            </a>
          )}
          {address && (
            <div className="text-xs text-muted-foreground mt-1">{address}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalGovernmentCard;

