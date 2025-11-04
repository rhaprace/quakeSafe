/**
 * Type tag component
 * Displays a small uppercase type label
 */

import { cn } from '@/lib/utils';
import type { TypeTagProps } from '@/types/ui';

export const TypeTag: React.FC<TypeTagProps> = ({ type, className }) => {
  return (
    <span
      className={cn(
        'text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2',
        className
      )}
    >
      {type}
    </span>
  );
};

