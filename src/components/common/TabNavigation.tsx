import { cn } from '@/lib/utils';
import type { TabNavigationProps } from '@/types/ui';

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  return (
    <div className={cn('border-b border-border overflow-x-auto', className)}>
      <nav className="flex gap-1 min-w-max" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap',
                isActive
                  ? 'border-primary text-primary font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
              )}
            >
              <span className="text-sm lg:text-base">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

