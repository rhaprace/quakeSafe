import { cn } from '@/lib/utils';
import type { SectionHeaderProps } from '@/types/ui';

const sizeClasses = {
  sm: {
    title: 'text-xl font-bold tracking-tight mb-2',
    subtitle: 'text-xs text-muted-foreground',
    container: 'mb-6',
  },
  md: {
    title: 'text-2xl font-bold tracking-tight mb-2',
    subtitle: 'text-sm text-muted-foreground',
    container: 'mb-8',
  },
  lg: {
    title: 'text-3xl font-bold tracking-tight sm:text-4xl mb-3',
    subtitle: 'text-muted-foreground max-w-3xl',
    container: 'mb-12 lg:mb-16',
  },
  xl: {
    title: 'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6',
    subtitle: 'text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl',
    container: 'mb-8',
  },
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  size = 'md',
  className,
}) => {
  const classes = sizeClasses[size];

  return (
    <div className={cn(classes.container, className)}>
      <h2 className={classes.title}>{title}</h2>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
    </div>
  );
};

