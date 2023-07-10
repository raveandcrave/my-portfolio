'use client';

import {useTheme} from 'next-themes';
import {useState, useEffect} from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div>The current theme is {theme}</div>
      <button onClick={() => setTheme('light')} className="bg-white rounded text-slate-500 px-4">
        Light
      </button>
      <button onClick={() => setTheme('dark')} className="bg-white rounded text-slate-500 px-4">
        Dark
      </button>
    </div>
  );
};

export default ThemeSwitcher;
