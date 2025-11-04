import type { LucideIcon } from 'lucide-react';

interface ResourceListItemProps {
  icon: LucideIcon;
  iconColor?: string;
  text: string;
  className?: string;
}

export const ResourceListItem: React.FC<ResourceListItemProps> = ({
  icon: Icon,
  iconColor = 'text-muted-foreground',
  text,
  className = '',
}) => {
  return (
    <div className={`flex items-start gap-2 p-2 border rounded-md hover:bg-muted/30 transition-colors ${className}`}>
      <Icon className={`h-3 w-3 ${iconColor} flex-shrink-0 mt-0.5`} />
      <span className="text-xs text-foreground/80 leading-tight">{text}</span>
    </div>
  );
};

export default ResourceListItem;

