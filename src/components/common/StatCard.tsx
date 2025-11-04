import { cn } from '@/lib/utils';
import type { StatCardProps } from '@/types/ui';

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  className,
}) => {
  return (
    <div className={cn('bg-background p-8 text-center', className)}>
      <div className="mb-3">
        <div className="text-3xl font-bold tracking-tight">{value}</div>
      </div>
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
};

