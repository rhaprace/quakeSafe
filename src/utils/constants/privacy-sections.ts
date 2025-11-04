export const PRIVACY_SECTIONS = [
  'introduction',
  'collection',
  'usage',
  'storage',
  'thirdParty',
  'rights',
  'cookies',
  'children',
  'changes',
  'contact',
] as const;

export type PrivacySectionId = typeof PRIVACY_SECTIONS[number];

