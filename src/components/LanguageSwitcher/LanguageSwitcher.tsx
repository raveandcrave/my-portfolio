import Link from 'next/link';
import cn from 'classnames';
import {languages} from '@/app/i18n/settings';
import {LanguageSwitcherProps} from './LanguageSwitcher.props';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({lng}: LanguageSwitcherProps) => {
  return (
    <div className="flex gap-2">
      {languages.map((language, index) => {
        return (
          <div key={language} className="flex gap-2">
            <Link
              href={`/${language}`}
              className={cn('relative', {
                [`${styles.active} dark:after:bg-green-200`]: language === lng,
              })}>
              {language.toUpperCase()}
            </Link>
            {languages.length !== index + 1 && <span>/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
