import type { ExternalLink, ResourceCategory } from '@/types/common';
import type { TFunction } from 'i18next';

export const getLocalResources = (t: TFunction): ResourceCategory[] => [
  {
    category: t('sections.local.shelters.category'),
    description: t('sections.local.shelters.description'),
    items: [
      t('sections.local.shelters.items.community'),
      t('sections.local.shelters.items.schools'),
      t('sections.local.shelters.items.religious'),
      t('sections.local.shelters.items.redcross'),
    ],
  },
  {
    category: t('sections.local.healthcare.category'),
    description: t('sections.local.healthcare.description'),
    items: [
      t('sections.local.healthcare.items.hospitals'),
      t('sections.local.healthcare.items.urgent'),
      t('sections.local.healthcare.items.fire'),
      t('sections.local.healthcare.items.community'),
    ],
  },
  {
    category: t('sections.local.supply.category'),
    description: t('sections.local.supply.description'),
    items: [
      t('sections.local.supply.items.eoc'),
      t('sections.local.supply.items.fema'),
      t('sections.local.supply.items.foodbanks'),
      t('sections.local.supply.items.distribution'),
    ],
  },
];

export const getVolunteerOrganizations = (t: TFunction): ExternalLink[] => [
  {
    name: t('sections.volunteer.cert.name'),
    description: t('sections.volunteer.cert.description'),
    url: 'https://www.fema.gov/emergency-managers/individuals-communities/cert',
    type: t('sections.volunteer.cert.type'),
  },
  {
    name: t('sections.volunteer.redcross.name'),
    description: t('sections.volunteer.redcross.description'),
    url: 'https://www.redcross.org/volunteer',
    type: t('sections.volunteer.redcross.type'),
  },
  {
    name: t('sections.volunteer.salvation.name'),
    description: t('sections.volunteer.salvation.description'),
    url: 'https://www.salvationarmyusa.org/usn/disaster-relief/',
    type: t('sections.volunteer.salvation.type'),
  },
  {
    name: t('sections.volunteer.radio.name'),
    description: t('sections.volunteer.radio.description'),
    url: 'http://www.arrl.org/ares',
    type: t('sections.volunteer.radio.type'),
  },
];