'use client';

import {motion} from 'framer-motion';
import {experienceListVariants} from '../ExperienceList/ExperienceList';
import {ExperienceItemMotionProps} from './ExperienceItemMotion.props';

const ExperienceItemMotion = ({children, custom}: ExperienceItemMotionProps) => {
  return (
    <motion.div
      variants={experienceListVariants}
      custom={custom}
      className="col-span-3 md:col-span-2 md:even:col-start-2 p-5 rounded shadow-xl bg-sky-50 dark:bg-slate-700">
      {children}
    </motion.div>
  );
};

export default ExperienceItemMotion;
