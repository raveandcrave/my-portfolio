import Title from '@/components/Title/Title';
import ExperienceList from '@/components/ExperienceList/ExperienceList';
import SectionMotion from '../SectionMotion/SectionMotion';
import {ExperienceSectionProps} from './ExperienceSection.props';

const ExperienceSection = ({t}: ExperienceSectionProps) => {
  return (
    <SectionMotion className="py-24 mx-auto" id="experience">
      <Title tag="h2" className="mb-10">
        {t('experience-section.title')}
      </Title>
      <ExperienceList />
    </SectionMotion>
  );
};

export default ExperienceSection;
