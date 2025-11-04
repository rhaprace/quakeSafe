/**
 * Common type definitions used across the application
 */
import type { LucideIcon } from 'lucide-react';


export interface CardData {
  title: string;
  description: string;
}

export interface FeatureCard extends CardData {
  icon?: LucideIcon;
}

export interface NumberedCard extends CardData {
  number: string;
  link: string;
}

export interface ExternalLink {
  name: string;
  description: string;
  url: string;
  type: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
  type: string;
}

export interface ResourceCategory {
  category: string;
  description: string;
  items: string[];
}

export interface GuideSection {
  subtitle: string;
  points: string[];
}

export interface Guide {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: GuideSection[];
}

export interface StatData {
  value: string;
  label: string;
  description: string;
}

export interface LegalSection {
  id: string;
  title: string;
  content: string | string[];
}

