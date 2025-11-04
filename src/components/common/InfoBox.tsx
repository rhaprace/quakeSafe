/**
 * Info box component with variants
 * Used for displaying important information, warnings, or tips
 */

import { cn } from '@/lib/utils';
import type { InfoBoxProps } from '@/types/ui';

const variantClasses = {
  default: 'rounded-lg border bg-card p-6',
  muted: 'rounded-lg border bg-muted/50 p-6 lg:p-8',
  destructive: 'rounded-lg border border-destructive/50 bg-destructive/5 p-6 lg:p-8',
  warning: 'rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-900/10',
};

export const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  children,
  variant = 'default',
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn(variantClasses[variant], className)}>
      {(title || Icon) && (
        <div className="mb-4 flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5" />}
          {title && <h3 className="font-semibold">{title}</h3>}
        </div>
      )}
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

