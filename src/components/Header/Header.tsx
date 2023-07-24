'use client';
import {KeyboardEvent} from 'react';
import cn from 'classnames';
import {motion, Variants} from 'framer-motion';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Button from '../Button/Button';
import {HeaderProps} from './Header.props';
import {useTranslation} from '@/app/i18n/client';

import styles from './Header.module.css';

const menu = ['about', 'experience', 'contact'] as const;

const Header = ({lang, className}: HeaderProps) => {
  const {t} = useTranslation(lang, 'header');

  const navVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  const handleKey = (e: KeyboardEvent<HTMLAnchorElement>, item: string) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      scrollToSection(item);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <header className={cn(styles.header, 'dark:bg-slate-700', className)}>
      <nav className="grid items-center gap-5 grid-cols-2">
        <ul className={styles.menu}>
          {menu.map((item, i) => (
            <motion.li initial="hidden" animate="visible" variants={navVariants} custom={i + 1} key={item}>
              <a
                tabIndex={0}
                className={cn(styles.menuLink, 'dark:hover:text-green-200')}
                onClick={() => scrollToSection(item)}
                onKeyDown={(e) => handleKey(e, item)}>
                <span className="text-cyclamen dark:text-green-200">0{i + 1}.</span> {t(item)}
              </a>
            </motion.li>
          ))}
        </ul>
        <Button
          initial="hidden"
          animate="visible"
          variants={navVariants}
          custom={menu.length - 1}
          className="justify-self-start">
          {t('resume')}
        </Button>
      </nav>
      <div className="justify-self-end flex gap-5 items-center">
        <ThemeSwitcher />
        <LanguageSwitcher lng={lang} />
      </div>
    </header>
  );
};

export default Header;
