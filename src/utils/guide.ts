import { Shield, AlertTriangle, Heart, Package, Home, Users } from 'lucide-react';

export const preparednessGuides = [
    {
      id: 'before',
      title: 'Before an Earthquake',
      icon: Shield,
      description: 'Prepare your home and family for potential earthquakes',
      content: [
        {
          subtitle: 'Secure Your Home',
          points: [
            'Bolt bookcases, water heaters, and heavy furniture to walls',
            'Install strong latches on cabinets to prevent contents from spilling',
            'Move heavy items to lower shelves',
            'Store breakable items in closed cabinets with latches',
            'Hang heavy pictures and mirrors away from beds and seating areas',
          ]
        },
        {
          subtitle: 'Emergency Planning',
          points: [
            'Develop a family emergency plan with meeting locations',
            'Identify safe spots in each room (under sturdy desks or against interior walls)',
            'Practice "Drop, Cover, and Hold On" drills regularly',
            'Keep emergency contact information easily accessible',
            'Plan evacuation routes and practice them',
          ]
        },
        {
          subtitle: 'Important Documents',
          points: [
            'Keep copies of important documents in a waterproof container',
            'Store insurance policies, identification, and medical records',
            'Take photos/video of your home and possessions for insurance',
            'Keep some cash on hand in case ATMs are not working',
          ]
        }
      ]
    },
    {
      id: 'during',
      title: 'During an Earthquake',
      icon: AlertTriangle,
      description: 'Know what to do when the ground starts shaking',
      content: [
        {
          subtitle: 'Drop, Cover, and Hold On',
          points: [
            'DROP to your hands and knees immediately',
            'Take COVER under a sturdy desk or table if available',
            'HOLD ON to your shelter and protect your head/neck with your arms',
            'If no table, cover your head and neck with arms and hands',
            'Stay in this position until shaking stops',
          ]
        },
        {
          subtitle: 'If You Are Indoors',
          points: [
            'Stay inside - do not run outside during shaking',
            'Do not stand in doorways (not safer than other locations)',
            'Stay away from windows, mirrors, and heavy objects that could fall',
            'Do not use elevators',
            'If in bed, stay there and cover your head with a pillow',
          ]
        },
        {
          subtitle: 'If You Are Outdoors',
          points: [
            'Move away from buildings, power lines, and trees',
            'Drop, cover, and hold on in an open area',
            'If driving, pull over safely and stay in the vehicle',
            'Do not stop under bridges, overpasses, or power lines',
          ]
        }
      ]
    },
    {
      id: 'after',
      title: 'After an Earthquake',
      icon: Heart,
      description: 'Steps to take once the shaking has stopped',
      content: [
        {
          subtitle: 'Immediate Actions',
          points: [
            'Check yourself and others for injuries - provide first aid if trained',
            'Check for hazards: gas leaks, electrical damage, structural damage',
            'Turn off gas if you smell gas or suspect a leak',
            'Use flashlights instead of candles or matches',
            'Be prepared for aftershocks',
          ]
        },
        {
          subtitle: 'Communication and Information',
          points: [
            'Listen to emergency broadcasts for information and instructions',
            'Use text messages instead of phone calls when possible',
            'Check on neighbors, especially elderly or disabled individuals',
            'Stay off the roads unless absolutely necessary',
            'Do not enter damaged buildings',
          ]
        },
        {
          subtitle: 'Ongoing Safety',
          points: [
            'Inspect your home for damage before re-entering',
            'Document damage with photos for insurance claims',
            'Be patient - emergency services may be overwhelmed',
            'Conserve battery power and water',
            'Help others if you are able to do so safely',
          ]
        }
      ]
    },
    {
      id: 'kit',
      title: 'Emergency Kit Essentials',
      icon: Package,
      description: 'Essential supplies every household should have',
      content: [
        {
          subtitle: 'Water and Food (3-day supply minimum)',
          points: [
            '1 gallon of water per person per day',
            'Non-perishable food for each person',
            'Manual can opener and utility knife',
            'Paper plates, cups, and plastic utensils',
            'Baby formula and food if needed',
          ]
        },
        {
          subtitle: 'Communication and Light',
          points: [
            'Battery-powered or hand-crank radio',
            'NOAA Weather Radio with tone alert',
            'Flashlights (one per person)',
            'Extra batteries for all devices',
            'Cell phone chargers (solar or hand-crank)',
          ]
        },
        {
          subtitle: 'First Aid and Safety',
          points: [
            'Well-stocked first aid kit',
            'Prescription medications (7-day supply)',
            'Personal hygiene items',
            'Emergency contact information',
            'Local area maps',
            'Whistle for signaling help',
          ]
        }
      ]
    },
    {
      id: 'building',
      title: 'Building Safety Tips',
      icon: Home,
      description: 'Make your building more earthquake-resistant',
      content: [
        {
          subtitle: 'Foundation and Structure',
          points: [
            'Ensure your home is properly bolted to its foundation',
            'Retrofit older buildings to current seismic standards',
            'Identify and reinforce weak points in your structure',
            'Consider professional seismic retrofitting',
            'Regular maintenance of structural elements',
          ]
        },
        {
          subtitle: 'Interior Safety Measures',
          points: [
            'Install automatic gas shut-off valves',
            'Use flexible connections for gas appliances',
            'Secure ceiling fans and light fixtures',
            'Install safety film on large windows',
            'Use earthquake putty for securing small objects',
          ]
        }
      ]
    },
    {
      id: 'community',
      title: 'Community Preparedness',
      icon: Users,
      description: 'Working together for earthquake readiness',
      content: [
        {
          subtitle: 'Neighborhood Planning',
          points: [
            'Organize neighborhood emergency response teams',
            'Identify neighbors with special skills (medical, engineering)',
            'Plan for vulnerable community members (elderly, disabled)',
            'Establish communication protocols with neighbors',
            'Practice community emergency drills',
          ]
        },
        {
          subtitle: 'Community Resources',
          points: [
            'Know locations of emergency shelters and hospitals',
            'Identify community emergency supply caches',
            'Learn about local emergency response procedures',
            'Participate in community preparedness programs',
            'Advocate for improved building codes and safety measures',
          ]
        }
      ]
    }
  ];