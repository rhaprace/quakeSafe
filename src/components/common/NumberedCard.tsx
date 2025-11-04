/**
 * Numbered card component with link
 * Used for sequential content like preparedness steps
 */

import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { NumberedCardProps } from '@/types/ui';
import { NumberedBadge } from './NumberedBadge';

export const NumberedCard: React.FC<NumberedCardProps> = ({
  title,
  description,
  number,
  link,
  className,
}) => {
  return (
    <Link
      to={link}
      className={cn(
        'group block border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all',
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <NumberedBadge number={number} />
        <div className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
          →
        </div>
      </div>
      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

