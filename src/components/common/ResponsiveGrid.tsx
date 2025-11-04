import { cn } from '@/lib/utils';
import type { ResponsiveGridProps } from '@/types/ui';

const gapClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const getGridClasses = (cols: ResponsiveGridProps['cols']): string => {
  const classes: string[] = ['grid'];
  
  if (cols?.default) {
    classes.push(`grid-cols-${cols.default}`);
  }
  
  if (cols?.sm) {
    classes.push(`sm:grid-cols-${cols.sm}`);
  }
  
  if (cols?.md) {
    classes.push(`md:grid-cols-${cols.md}`);
  }
  
  if (cols?.lg) {
    classes.push(`lg:grid-cols-${cols.lg}`);
  }
  
  return classes.join(' ');
};

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  cols = { sm: 2 },
  gap = 'md',
  className,
}) => {
  return (
    <div className={cn(getGridClasses(cols), gapClasses[gap], className)}>
      {children}
    </div>
  );
};

