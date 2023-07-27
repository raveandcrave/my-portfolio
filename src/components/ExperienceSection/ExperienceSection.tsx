import Title from '@/components/Title/Title';
import ExperienceList from '@/components/ExperienceList/ExperienceList';
import SectionMotion from '../SectionMotion/SectionMotion';
import {ExperienceSectionProps} from './ExperienceSection.props';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import ExperienceItemMotion from '../ExperienceItemMotion/ExperienceItemMotion';

export type ExperienceKeys = 'omstu' | 'freelance' | 'krds';

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

const ExperienceSection = ({t}: ExperienceSectionProps) => {
  return (
    <SectionMotion className="py-8 md:py-24 mx-auto" id="experience">
      <Title tag="h2" className="mb-10">
        {t('experience-section.title')}
      </Title>
      <ExperienceList>
        {experiences.map((item, i) => {
          const {key, tags} = item;

          return (
            <ExperienceItemMotion key={key} custom={i + 1}>
              <ExperienceItem itemKey={key} tags={tags} t={t} />
            </ExperienceItemMotion>
          );
        })}
      </ExperienceList>
    </SectionMotion>
  );
};

export default ExperienceSection;
