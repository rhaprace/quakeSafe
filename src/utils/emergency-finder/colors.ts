
import type { EmergencyContactType } from '@/types/emergency-finder';
export const getContactColor = (type: EmergencyContactType): string => {
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

