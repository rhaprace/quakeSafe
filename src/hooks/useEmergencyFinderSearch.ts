import { useState, useCallback, useMemo } from 'react';
import { searchCities } from '@/data/philippines-regions';
import type { CityEmergencyData } from '@/types/emergency-finder';

export const useEmergencyFinderSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    return searchQuery ? searchCities(searchQuery) : [];
  }, [searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleSearchResultSelect = useCallback((city: CityEmergencyData, onSelect: (city: CityEmergencyData) => void) => {
    onSelect(city);
    clearSearch();
  }, [clearSearch]);

  return {
    searchQuery,
    searchResults,
    handleSearch,
    clearSearch,
    handleSearchResultSelect,
  };
};

