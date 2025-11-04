/**
 * Numbered badge component
 * Displays a number in a consistent badge style
 */

import { cn } from '@/lib/utils';
import type { NumberedBadgeProps } from '@/types/ui';

const sizeClasses = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-xs',
  lg: 'h-10 w-10 text-sm',
};

export const NumberedBadge: React.FC<NumberedBadgeProps> = ({
  number,
  size = 'md',
  className,
}) => {
  const formattedNumber = typeof number === 'number' 
    ? String(number).padStart(2, '0') 
    : number;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded border bg-background font-mono font-semibold',
        sizeClasses[size],
        className
      )}
    >
      {formattedNumber}
    </div>
  );
};

