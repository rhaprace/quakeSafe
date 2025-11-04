import { useState, useCallback } from 'react';

export const useSectionToggle = (defaultSection: string | null = null) => {
  const [openSection, setOpenSection] = useState<string | null>(defaultSection);

  const toggleSection = useCallback((section: string) => {
    setOpenSection((current) => (current === section ? null : section));
  }, []);

  return {
    openSection,
    toggleSection,
    setOpenSection,
  };
};

