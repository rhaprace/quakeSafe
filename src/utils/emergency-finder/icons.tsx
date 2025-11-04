import { Phone, Hospital, Shield, AlertTriangle } from 'lucide-react';
import type { EmergencyContactType } from '@/types/emergency-finder';

export const getContactIcon = (type: EmergencyContactType): React.ReactNode => {
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

