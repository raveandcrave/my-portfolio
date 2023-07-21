'use client';

import {useTheme} from 'next-themes';
import {useState, useEffect, KeyboardEvent} from 'react';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const {theme, setTheme} = useTheme();

  const isDark = theme === 'dark';

  const handleOnChange = (isDark: boolean) => {
    isDark ? setTheme('light') : setTheme('dark');
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      handleOnChange(isDark);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div tabIndex={0} onKeyDown={handleKey}>
      <label
        className={styles.container}
        title={isDark ? 'Activate light mode' : 'Activate dark mode'}
        aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}>
        <input
          type="checkbox"
          checked={!isDark}
          defaultChecked={!isDark}
          onChange={(e) => handleOnChange(e.target.checked)}
        />
        <div />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
