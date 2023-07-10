'use client';

import {ThemeProvider} from 'next-themes';
import {ReactNode} from 'react';
import {useState, useEffect} from 'react';

export const Providers = ({children}: {children: ReactNode}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
