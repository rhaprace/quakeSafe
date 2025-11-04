/**
 * Reusable info card component with variants
 * Provides consistent card styling across the application
 */

import { cn } from '@/lib/utils';
import type { InfoCardProps } from '@/types/ui';

const variantClasses = {
  default: 'border rounded-lg p-6',
  hover: 'border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all',
  muted: 'rounded-lg border bg-muted/50 p-6 lg:p-8',
  destructive: 'rounded-lg border border-destructive/50 bg-destructive/5 p-6 lg:p-8',
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  variant = 'default',
  className,
  children,
}) => {
  return (
    <div className={cn(variantClasses[variant], className)}>
      <div className="mb-3">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
};

