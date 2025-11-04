import { cn } from '@/lib/utils';
import type { IconListItemProps } from '@/types/ui';

export const IconListItem: React.FC<IconListItemProps> = ({
  children,
  icon,
  className,
}) => {
  const defaultIcon = (
    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
  );

  return (
    <li className={cn('flex items-start gap-2', className)}>
      {icon || defaultIcon}
      <span className="text-sm text-muted-foreground flex-1">{children}</span>
    </li>
  );
};

