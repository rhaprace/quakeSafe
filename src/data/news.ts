import type { NewsArticle, NewsCategory } from '@/types/news';

export const newsCategories: NewsCategory[] = [
  {
    id: 'all',
    name: 'All News',
    description: 'All earthquake-related news and updates',
  },
  {
    id: 'safety',
    name: 'Safety Tips',
    description: 'Latest safety guidelines and recommendations',
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Scientific discoveries and earthquake research',
  },
  {
    id: 'preparedness',
    name: 'Preparedness',
    description: 'Emergency preparedness and planning',
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Earthquake detection and monitoring technology',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Community stories and initiatives',
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'New Early Warning System Reduces Earthquake Response Time',
    excerpt: 'Advanced seismic sensors and AI technology enable faster earthquake detection and public alerts, potentially saving thousands of lives.',
    content: `A groundbreaking early warning system has been deployed across major seismic zones, utilizing advanced sensors and artificial intelligence to detect earthquakes seconds before they strike populated areas.

The system works by detecting the initial P-waves (primary waves) that travel faster than the more destructive S-waves (secondary waves). This crucial time difference, though often just seconds, can be enough to trigger automated safety protocols, halt trains, shut down gas lines, and alert millions of people through their smartphones.

Key features of the new system include:
- Real-time seismic data processing using machine learning algorithms
- Integration with emergency broadcast systems
- Automated infrastructure protection protocols
- Mobile app notifications with location-specific alerts

Early tests have shown the system can provide up to 60 seconds of warning for areas farther from the epicenter, giving people critical time to take cover and prepare for the shaking.

Emergency management officials emphasize that while the system is a significant advancement, it should complement, not replace, traditional earthquake preparedness measures such as securing furniture, maintaining emergency kits, and practicing drop, cover, and hold on drills.`,
    author: 'QuakeSafe Editorial Team',
    datePublished: '2025-11-10T10:00:00Z',
    dateModified: '2025-11-10T10:00:00Z',
    category: 'technology',
    tags: ['early warning', 'technology', 'AI', 'safety'],
    readTime: 4,
  },
  {
    id: '2',
    title: 'Essential Items for Your Earthquake Emergency Kit',
    excerpt: 'Experts recommend these critical supplies to keep your family safe during and after an earthquake.',
    content: `Being prepared for an earthquake means having the right supplies on hand. Emergency management experts recommend assembling a comprehensive earthquake kit that can sustain your household for at least 72 hours.

Essential items to include:

**Water and Food:**
- One gallon of water per person per day (minimum 3-day supply)
- Non-perishable food items (canned goods, energy bars, dried fruits)
- Manual can opener
- Water purification tablets

**First Aid and Medications:**
- Comprehensive first aid kit
- Prescription medications (7-day supply)
- Over-the-counter pain relievers
- Antibacterial ointment and bandages

**Tools and Supplies:**
- Battery-powered or hand-crank radio
- Flashlights and extra batteries
- Multi-tool or Swiss Army knife
- Whistle for signaling help
- Dust masks and work gloves

**Important Documents:**
- Copies of insurance policies
- Identification documents
- Bank account information
- Emergency contact list

**Personal Items:**
- Change of clothing and sturdy shoes
- Sleeping bag or blanket
- Personal hygiene items
- Cash in small denominations

Remember to check and update your kit every six months, replacing expired items and adjusting for seasonal needs. Store your kit in an easily accessible location that all family members know about.`,
    author: 'QuakeSafe Editorial Team',
    datePublished: '2025-11-08T14:30:00Z',
    category: 'preparedness',
    tags: ['emergency kit', 'preparedness', 'safety', 'supplies'],
    readTime: 5,
  },
  {
    id: '3',
    title: 'Understanding the Ring of Fire: Why Some Regions Experience More Earthquakes',
    excerpt: 'Learn about the Pacific Ring of Fire and why it accounts for 90% of the world\'s earthquakes.',
    content: `The Pacific Ring of Fire is a 40,000-kilometer horseshoe-shaped zone that encircles the Pacific Ocean, home to 75% of the world's active volcanoes and responsible for approximately 90% of all earthquakes.

**What Makes the Ring of Fire So Active?**

The Ring of Fire's intense seismic activity is caused by tectonic plate boundaries. The Pacific Plate and several smaller plates are constantly moving, colliding with, sliding past, or diving beneath neighboring plates. These interactions create the perfect conditions for earthquakes and volcanic eruptions.

**Key Regions in the Ring of Fire:**
- Japan and the Philippines
- Indonesia and New Zealand
- The western coasts of North and South America
- Alaska and the Aleutian Islands

**Types of Plate Boundaries:**

1. **Convergent Boundaries:** Where plates collide, one often slides beneath the other in a process called subduction. This creates the most powerful earthquakes, like the 2011 Tōhoku earthquake in Japan.

2. **Transform Boundaries:** Where plates slide past each other horizontally, such as California's San Andreas Fault.

3. **Divergent Boundaries:** Where plates move apart, though these are less common in the Ring of Fire.

**Living in the Ring of Fire:**

Countries within the Ring of Fire have developed sophisticated earthquake preparedness programs, including:
- Strict building codes designed for seismic resistance
- Regular earthquake drills in schools and workplaces
- Advanced early warning systems
- Public education campaigns

Understanding the geological forces at work helps communities better prepare for and respond to seismic events. While we cannot prevent earthquakes, knowledge and preparation can significantly reduce their impact on human life and infrastructure.`,
    author: 'QuakeSafe Editorial Team',
    datePublished: '2025-11-05T09:00:00Z',
    category: 'research',
    tags: ['Ring of Fire', 'geology', 'tectonic plates', 'education'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'Community Earthquake Drill Saves Lives: A Success Story',
    excerpt: 'How regular earthquake drills helped a community respond effectively during a recent 6.5 magnitude earthquake.',
    content: `When a 6.5 magnitude earthquake struck a coastal community last month, residents' quick and coordinated response demonstrated the life-saving value of regular earthquake preparedness drills.

**The Event:**

At 2:47 PM local time, the earthquake struck with little warning. Within seconds, thousands of residents across the affected area executed the "Drop, Cover, and Hold On" procedure they had practiced countless times during community drills.

**Key Success Factors:**

1. **Regular Practice:** The community had conducted quarterly earthquake drills for the past three years, making the safety response almost automatic.

2. **School Preparedness:** Students and teachers immediately took cover under desks and tables, protecting themselves from falling debris.

3. **Workplace Protocols:** Businesses had established clear evacuation procedures and designated assembly points.

4. **Community Coordination:** Local emergency services had practiced their response procedures, enabling rapid deployment of rescue teams.

**Results:**

Despite significant structural damage to several buildings, there were no fatalities and only minor injuries reported. Emergency responders credit the community's preparedness culture for this remarkable outcome.

**Lessons Learned:**

- Regular drills build muscle memory that activates during real emergencies
- Community-wide participation creates a culture of preparedness
- Clear communication channels are essential
- Post-drill evaluations help improve future responses

**Your Community Can Prepare Too:**

1. Organize regular earthquake drills at home, school, and work
2. Establish family emergency communication plans
3. Identify safe spots in each room
4. Secure heavy furniture and objects
5. Participate in community preparedness programs

This success story demonstrates that while we cannot prevent earthquakes, we can significantly reduce their impact through preparation, practice, and community cooperation.`,
    author: 'QuakeSafe Editorial Team',
    datePublished: '2025-11-02T11:15:00Z',
    category: 'community',
    tags: ['community', 'drills', 'preparedness', 'success story'],
    readTime: 5,
  },
  {
    id: '5',
    title: 'Seismic Retrofitting: Strengthening Buildings Against Earthquakes',
    excerpt: 'Modern retrofitting techniques can significantly improve older buildings\' ability to withstand seismic activity.',
    content: `As our understanding of earthquake engineering advances, seismic retrofitting has become a crucial strategy for protecting older buildings that weren't designed to modern earthquake-resistant standards.

**What is Seismic Retrofitting?**

Seismic retrofitting involves modifying existing structures to make them more resistant to seismic activity, ground motion, and soil failure due to earthquakes. This process is especially important for buildings constructed before modern building codes were established.

**Common Retrofitting Techniques:**

1. **Foundation Bolting:** Securing the building to its foundation prevents it from sliding off during an earthquake.

2. **Cripple Wall Bracing:** Reinforcing short walls between the foundation and first floor prevents collapse.

3. **Soft Story Strengthening:** Adding shear walls or moment frames to buildings with large openings (like garages) on the ground floor.

4. **Unreinforced Masonry Strengthening:** Adding steel reinforcement to brick and concrete block buildings.

**Benefits of Retrofitting:**

- Significantly reduces risk of building collapse
- Protects occupants from injury
- Minimizes property damage
- Maintains building functionality after earthquakes
- Can increase property value

**Cost Considerations:**

While retrofitting requires upfront investment, it's typically far less expensive than rebuilding after earthquake damage. Many jurisdictions offer:
- Tax incentives for seismic upgrades
- Low-interest loans for retrofitting projects
- Grants for historic building preservation

**Getting Started:**

1. Have a structural engineer assess your building
2. Prioritize critical safety improvements
3. Research available financial assistance programs
4. Hire licensed contractors experienced in seismic work
5. Ensure all work meets current building codes

**Looking Forward:**

Cities in high-risk seismic zones are increasingly requiring retrofitting of vulnerable buildings. This proactive approach, combined with public education and financial incentives, is creating safer, more resilient communities.

Whether you own a historic home or manage a commercial building, seismic retrofitting is an investment in safety that protects both people and property for generations to come.`,
    author: 'QuakeSafe Editorial Team',
    datePublished: '2025-10-28T13:45:00Z',
    category: 'safety',
    tags: ['retrofitting', 'building safety', 'engineering', 'prevention'],
    readTime: 6,
  },
];

