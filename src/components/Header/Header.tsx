'use client';
import cn from 'classnames';
import {motion, Variants} from 'framer-motion';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {HeaderProps} from './Header.props';

import styles from './Header.module.css';
import Button from '../Button/Button';

const menu = ['обо мне', 'опыт', 'связаться'];

const Header = ({lang, className}: HeaderProps) => {
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

  return (
    <header className={cn(styles.header, 'dark:bg-slate-700', className)}>
      <nav className="grid items-center gap-5 grid-cols-2">
        <ul className={styles.menu}>
          {menu.map((item, i) => (
            <motion.li tabIndex={0} initial="hidden" animate="visible" variants={navVariants} custom={i + 1} key={item}>
              <a className={cn(styles.menuLink, 'dark:hover:text-green-200')}>
                <span className="text-cyclamen dark:text-green-200">0{i + 1}.</span> {item}
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
          Резюме
        </Button>
      </nav>
      <div className="justify-self-end">
        <ThemeSwitcher />
        <button>язык {lang}</button>
      </div>
    </header>
  );
};

export default Header;
