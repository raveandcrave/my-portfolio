import Image from 'next/image';
import Title from '@/components/Title/Title';
import styles from './AboutSection.module.css';
import Papich from '@/assets/papich.jpg';
import FireIcon from './fire.svg?svgr';
import SectionMotion from '@/components/SectionMotion/SectionMotion';
import {AboutSectionProps} from './Aboutsection.props';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'CSS/SASS/CSS Modules',
  'Tailwind CSS',
  'React/Redux',
  'Next.js',
  'Git',
  'Webpack',
  'Docker',
  'Node.js',
];

const AboutSection = ({t}: AboutSectionProps) => {
  return (
    <SectionMotion className="py-24" id="about">
      <Title tag="h2" className="mb-10">
        {t('about-section.title')}
      </Title>
      <div className="grid gap-12 grid-cols-5">
        <div className="col-span-3 border-l-4 border-cyclamen pl-6">
          <p className="mb-5">{t('about-section.description')}</p>
          <p className="mb-5">{t('about-section.skills-title')}</p>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <FireIcon className="inline-block fill-cyclamen" width={13} height={13} /> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <div className="bg-cyclamen rounded">
            <Image
              src={Papich}
              alt={t('about-section.image-alt')}
              className="rounded transition-transform hover:-translate-x-2 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </SectionMotion>
  );
};

export default AboutSection;
