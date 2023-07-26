'use client';

import {ThemeProvider} from 'next-themes';
import {useState, useEffect} from 'react';
import {LngContext} from '@/app/i18n/LngContext';
import {ProvidersProps} from './Providers.props';

export const Providers = ({lng, children}: ProvidersProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class">
      <LngContext.Provider value={{lng}}>{children}</LngContext.Provider>
    </ThemeProvider>
  );
};
