export const TERMS_SECTIONS = [
  'introduction',
  'acceptance',
  'service',
  'disclaimer',
  'responsibilities',
  'intellectual',
  'thirdPartyData',
  'liability',
  'availability',
  'modifications',
  'law',
  'contact',
] as const;

export type TermsSectionId = typeof TERMS_SECTIONS[number];

