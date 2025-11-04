import type { ExternalLink } from '@/types/common';

export const dataSources: ExternalLink[] = [
  {
    name: 'U.S. Geological Survey (USGS)',
    description: 'Real-time earthquake data and scientific monitoring',
    url: 'https://earthquake.usgs.gov/',
    type: 'Primary Data Source',
  },
  {
    name: 'Federal Emergency Management Agency (FEMA)',
    description: 'Emergency preparedness guidelines and best practices',
    url: 'https://www.fema.gov/',
    type: 'Preparedness Guidelines',
  },
  {
    name: 'Ready.gov',
    description: 'National preparedness campaign resources',
    url: 'https://www.ready.gov/',
    type: 'Educational Content',
  },
];