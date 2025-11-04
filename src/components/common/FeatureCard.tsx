import { cn } from '@/lib/utils';
import type { FeatureCardProps } from '@/types/ui';
import { NumberedBadge } from './NumberedBadge';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  index,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn('border rounded-lg p-6', className)}>
      <div className="mb-3">
        {index !== undefined && <NumberedBadge number={index + 1} />}
        {Icon && (
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

