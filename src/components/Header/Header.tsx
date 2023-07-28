'use client';
import {KeyboardEvent, useState, useEffect} from 'react';
import {useWindowSize} from 'usehooks-ts';
import cn from 'classnames';
import {motion, Variants} from 'framer-motion';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Button from '../Button/Button';
import {HeaderProps} from './Header.props';
import {useTranslation} from '@/app/i18n/client';
import MenuIcon from './menu.svg?svgr';
import CloseIcon from './close.svg?svgr';

import styles from './Header.module.css';

const menu = ['about', 'experience', 'contact'] as const;

const Header = ({lang, className}: HeaderProps) => {
  const {t} = useTranslation(lang, 'header');
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isMobileWidth, setMobileWidth] = useState<boolean>(false);
  const {width} = useWindowSize();

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

  const mobileMenuVariants: Variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
      position: 'fixed',
    },
    closed: {
      opacity: 0,
      x: '100%',
      position: 'fixed',
    },
  };

  useEffect(() => {
    if (width < 768) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [width]);

  const handleKey = (e: KeyboardEvent<HTMLAnchorElement>, item: string) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      scrollToSection(item);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <>
      <Button className="absolute right-5 top-5 md:hidden" aria-label={t('openMenu')} onClick={() => setIsOpened(true)}>
        <MenuIcon className="fill-black-custom dark:fill-green-200" />
      </Button>
      <motion.header
        variants={isMobileWidth ? mobileMenuVariants : {}}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        className={cn(styles.header, 'dark:bg-slate-700', className)}>
        <Button
          className="absolute right-5 top-5 md:hidden"
          aria-label={t('closeMenu')}
          onClick={() => setIsOpened(false)}>
          <CloseIcon className="fill-black-custom dark:fill-green-200" />
        </Button>
        <nav className="grid items-center gap-5 grid-cols-1 md:grid-cols-2 row-start-2 md:row-start-1">
          <ul className={styles.menu}>
            {menu.map((item, i) => (
              <motion.li
                initial="hidden"
                animate="visible"
                variants={navVariants}
                custom={i + 1}
                key={item}
                className="md:justify-self-center">
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
        <div className="md:justify-self-end flex gap-5 items-center row-start-1 md:row-start-1">
          <ThemeSwitcher />
          <LanguageSwitcher lng={lang} />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
