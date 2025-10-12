import { Shield, AlertTriangle, Heart, Package, Home, Users } from 'lucide-react';
import type { TFunction } from 'i18next';

export const getPreparednessGuides = (t: TFunction) => [
    {
      id: 'before',
      title: t('guides:guides.before.title'),
      icon: Shield,
      description: t('guides:guides.before.description'),
      content: [
        {
          subtitle: t('guides:guides.before.sections.secureHome.title'),
          points: t('guides:guides.before.sections.secureHome.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.before.sections.emergencyPlanning.title'),
          points: t('guides:guides.before.sections.emergencyPlanning.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.before.sections.importantDocuments.title'),
          points: t('guides:guides.before.sections.importantDocuments.points', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      id: 'during',
      title: t('guides:guides.during.title'),
      icon: AlertTriangle,
      description: t('guides:guides.during.description'),
      content: [
        {
          subtitle: t('guides:guides.during.sections.dropCoverHold.title'),
          points: t('guides:guides.during.sections.dropCoverHold.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.during.sections.indoors.title'),
          points: t('guides:guides.during.sections.indoors.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.during.sections.outdoors.title'),
          points: t('guides:guides.during.sections.outdoors.points', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      id: 'after',
      title: t('guides:guides.after.title'),
      icon: Heart,
      description: t('guides:guides.after.description'),
      content: [
        {
          subtitle: t('guides:guides.after.sections.immediate.title'),
          points: t('guides:guides.after.sections.immediate.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.after.sections.communication.title'),
          points: t('guides:guides.after.sections.communication.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.after.sections.ongoingSafety.title'),
          points: t('guides:guides.after.sections.ongoingSafety.points', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      id: 'kit',
      title: t('guides:guides.kit.title'),
      icon: Package,
      description: t('guides:guides.kit.description'),
      content: [
        {
          subtitle: t('guides:guides.kit.sections.waterFood.title'),
          points: t('guides:guides.kit.sections.waterFood.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.kit.sections.communication.title'),
          points: t('guides:guides.kit.sections.communication.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.kit.sections.firstAid.title'),
          points: t('guides:guides.kit.sections.firstAid.points', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      id: 'building',
      title: t('guides:guides.building.title'),
      icon: Home,
      description: t('guides:guides.building.description'),
      content: [
        {
          subtitle: t('guides:guides.building.sections.foundation.title'),
          points: t('guides:guides.building.sections.foundation.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.building.sections.interior.title'),
          points: t('guides:guides.building.sections.interior.points', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      id: 'community',
      title: t('guides:guides.community.title'),
      icon: Users,
      description: t('guides:guides.community.description'),
      content: [
        {
          subtitle: t('guides:guides.community.sections.neighborhood.title'),
          points: t('guides:guides.community.sections.neighborhood.points', { returnObjects: true }) as string[]
        },
        {
          subtitle: t('guides:guides.community.sections.resources.title'),
          points: t('guides:guides.community.sections.resources.points', { returnObjects: true }) as string[]
        }
      ]
    }
  ];