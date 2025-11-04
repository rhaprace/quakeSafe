import type { EmergencyContactType } from '@/types/emergency-finder';
import { getContactIconComponent } from '@/utils/emergency-finder/icons';
import { getContactColor } from '@/utils/emergency-finder/colors';

interface EmergencyTypeBadgeProps {
  type: EmergencyContactType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: {
    container: 'px-2 py-1 text-xs',
    icon: 'h-3 w-3',
  },
  md: {
    container: 'px-2.5 py-1.5 text-sm',
    icon: 'h-4 w-4',
  },
  lg: {
    container: 'px-3 py-2 text-base',
    icon: 'h-5 w-5',
  },
};

export const EmergencyTypeBadge: React.FC<EmergencyTypeBadgeProps> = ({
  type,
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  const Icon = getContactIconComponent(type);
  const colorClasses = getContactColor(type);
  const { container, icon} = sizeClasses[size];

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-md border font-medium ${container} ${colorClasses} ${className}`}
    >
      {showIcon && <Icon className={icon} />}
      <span>{type}</span>
    </div>
  );
};

export default EmergencyTypeBadge;

