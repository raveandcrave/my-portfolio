import cn from 'classnames';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {HeaderProps} from './Header.props';

import styles from './Header.module.css';
import Button from '../Button/Button';

const menu = ['обо мне', 'опыт', 'связаться'];

const Header = ({lang, className}: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <nav className="grid items-center gap-5 grid-cols-2">
        <ul className={styles.menu}>
          {menu.map((item, i) => (
            <li key={item}>
              <a className={styles.menuLink}>
                <span className="text-cyclamen">0{i + 1}.</span> {item}
              </a>
            </li>
          ))}
        </ul>
        <Button className="justify-self-start">Резюме</Button>
      </nav>
      <div className="justify-self-end">
        <ThemeSwitcher />
        <button>язык {lang}</button>
      </div>
    </header>
  );
};

export default Header;
