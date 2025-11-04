import type { LocalEmergencyContact } from '@/types/emergency-finder';
import { getContactIcon } from '@/utils/emergency-finder/icons';
import { getContactColor } from '@/utils/emergency-finder/colors';

interface EmergencyContactCardProps {
  contact: LocalEmergencyContact;
  className?: string;
}

export const EmergencyContactCard: React.FC<EmergencyContactCardProps> = ({
  contact,
  className = '',
}) => {
  return (
    <a
      href={`tel:${contact.number}`}
      className={`group border rounded-lg p-2.5 hover:bg-muted/50 transition-colors block ${className}`}
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
  );
};

export default EmergencyContactCard;

