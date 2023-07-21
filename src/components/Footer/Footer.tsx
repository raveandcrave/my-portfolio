'use client';
import {motion} from 'framer-motion';
import styles from './Footer.module.css';
import GithubIcon from './icons/github.svg?svgr';
import LinkedinIcon from './icons/linkedin.svg?svgr';
import InstagramIcon from './icons/instagram.svg?svgr';

const Footer = ({className}: {className: string}) => {
  return (
    <motion.footer
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
        },
      }}
      className={className}>
      <div className={styles.social}>
        <ul className={`${styles.socialList} dark:after:bg-slate-400`}>
          <li className={styles.socialListItem}>
            <a href="https://github.com/raveandcrave" target="_blank" className={`group ${styles.socialLink}`}>
              <GithubIcon
                className={`${styles.socialIcon} group-hover:fill-cyclamen group-hover:-translate-y-2 dark:fill-slate-300 dark:group-hover:fill-green-200`}
                width={25}
                height={25}
              />
            </a>
          </li>
          <li className={styles.socialListItem}>
            <a href="#" className={`group ${styles.socialLink}`}>
              <LinkedinIcon
                className={`${styles.socialIcon} group-hover:fill-cyclamen group-hover:-translate-y-2 dark:fill-slate-300 dark:group-hover:fill-green-200`}
                width={25}
                height={25}
              />
            </a>
          </li>
          <li className={styles.socialListItem}>
            <a href="https://www.instagram.com/rave_and_crave" target="_blank" className={`group ${styles.socialLink}`}>
              <InstagramIcon
                className={`${styles.socialIcon} group-hover:fill-cyclamen group-hover:-translate-y-2 dark:fill-slate-300 dark:group-hover:fill-green-200`}
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.email}>
        <div className={`${styles.emailWrapper} dark:after:bg-slate-400`}>
          <a href="mailto:victorkopan98@gmail.com" className={`${styles.emailLink} dark:hover:text-green-200`}>
            victorkopan98@gmail.com
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
