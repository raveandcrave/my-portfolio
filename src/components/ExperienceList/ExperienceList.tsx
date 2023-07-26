'use client';
import {motion, Variants} from 'framer-motion';
import styles from './ExperienceList.module.css';
import {ExperienceListProps} from './ExperienceList.props';

export const experienceListVariants: Variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: {
    y: 30,
    opacity: 0,
  },
};

const ExperienceList = ({children}: ExperienceListProps) => {
  return (
    <motion.div initial="visible" whileInView="visible" viewport={{once: true}} className={styles.wrapper}>
      {children}
    </motion.div>
  );
};

export default ExperienceList;
