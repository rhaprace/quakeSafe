/**
 * UI component prop type definitions
 */
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';


export type SectionHeaderSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  size?: SectionHeaderSize;
  className?: string;
}

export type CardVariant = 'default' | 'hover' | 'muted' | 'destructive';

export interface InfoCardProps {
  title: string;
  description: string;
  variant?: CardVariant;
  className?: string;
  children?: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  index?: number;
  icon?: LucideIcon;
  className?: string;
}

export interface NumberedCardProps {
  title: string;
  description: string;
  number: string;
  link: string;
  className?: string;
}

export interface ExternalLinkCardProps {
  name: string;
  description: string;
  url: string;
  type: string;
  className?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  description: string;
  className?: string;
}

export type GridColumns = 1 | 2 | 3 | 4;

export interface ResponsiveGridProps {
  children: ReactNode;
  cols?: {
    default?: GridColumns;
    sm?: GridColumns;
    md?: GridColumns;
    lg?: GridColumns;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface IconListItemProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export interface TypeTagProps {
  type: string;
  className?: string;
}

export type InfoBoxVariant = 'default' | 'muted' | 'destructive' | 'warning';

export interface InfoBoxProps {
  title?: string;
  children: ReactNode;
  variant?: InfoBoxVariant;
  icon?: LucideIcon;
  className?: string;
}

export interface TabItem {
  id: string;
  label: string;
  content?: ReactNode;
}

export interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export interface NumberedBadgeProps {
  number: number | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

