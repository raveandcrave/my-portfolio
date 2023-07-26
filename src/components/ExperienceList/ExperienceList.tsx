'use client';
import {motion, Variants} from 'framer-motion';
import {useContext} from 'react';
import Title from '@/components/Title/Title';
import styles from './ExperienceList.module.css';
import {useTranslation} from '@/app/i18n/client';
import {LngContext} from '@/app/i18n/LngContext';

type ExperienceKeys = 'omstu' | 'freelance' | 'krds';

interface Experience {
  key: ExperienceKeys;
  tags?: string[];
}

const experiences: Experience[] = [
  {
    key: 'omstu',
  },
  {
    key: 'freelance',
    tags: ['HTML', 'CSS', 'SASS', 'GULP', 'October CMS'],
  },
  {
    key: 'krds',
    tags: ['React', 'SASS', 'CSS Modules', 'Typescript', 'Ant Design', 'react-hook-form', 'chart.js', 'NodeJS'],
  },
];

const ExperienceList = () => {
  const {lng} = useContext(LngContext);
  const {t} = useTranslation(lng);

  const experienceListVariants: Variants = {
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

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} className={styles.wrapper}>
      {experiences.map((item, i) => {
        const {key, tags} = item;

        return (
          <motion.div
            variants={experienceListVariants}
            custom={i + 1}
            key={key}
            className="col-span-2 even:col-start-2 p-5 rounded shadow-xl bg-sky-50 dark:bg-slate-700">
            <Title tag="h3">{t(`experience-section.${key}.title`)}</Title>
            <div className="font-light text-slate-500 dark:text-green-200">{t(`experience-section.${key}.dates`)}</div>
            {tags && (
              <ul className="flex-wrap flex gap-2 mt-2">
                {tags.map((tag) => (
                  <li key={tag} className="px-4 py-1 bg-cyclamen text-white text-sm rounded-2xl max-h-7">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4">{t(`experience-section.${key}.description`)}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceList;
