import type { LucideIcon } from 'lucide-react';
import { Phone, Hospital, Shield, AlertTriangle } from 'lucide-react';
import type { EmergencyContactType } from '@/types/emergency-finder';

export const getContactIconComponent = (type: EmergencyContactType): LucideIcon => {
  switch (type) {
    case 'HOSPITAL':
      return Hospital;
    case 'FIRE':
      return AlertTriangle;
    case 'POLICE':
      return Shield;
    case 'DISASTER':
      return AlertTriangle;
    default:
      return Phone;
  }
};

export const getContactIcon = (type: EmergencyContactType, className: string = 'h-4 w-4'): React.ReactNode => {
  const Icon = getContactIconComponent(type);
  return <Icon className={className} />;
};

