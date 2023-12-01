import { useState, useEffect } from 'react';

export const useDebounce = (input: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [input, delay]);

  return debouncedValue;
};
