import type { NumberedCard, FeatureCard } from '@/types/common';
import type { TFunction } from 'i18next';

export const getPreparednessCards = (t: TFunction): NumberedCard[] => [
  {
    title: t('preparedness.before.title'),
    description: t('preparedness.before.description'),
    link: '/guides',
    number: '01',
  },
  {
    title: t('preparedness.during.title'),
    description: t('preparedness.during.description'),
    link: '/guides',
    number: '02',
  },
  {
    title: t('preparedness.after.title'),
    description: t('preparedness.after.description'),
    link: '/guides',
    number: '03',
  },
  {
    title: t('preparedness.kit.title'),
    description: t('preparedness.kit.description'),
    link: '/guides',
    number: '04',
  },
];
export const getFeatures = (t: TFunction): FeatureCard[] => [
  {
    title: t('features.realtime.title'),
    description: t('features.realtime.description'),
  },
  {
    title: t('features.interactive.title'),
    description: t('features.interactive.description'),
  },
  {
    title: t('features.preparedness.title'),
    description: t('features.preparedness.description'),
  },
];