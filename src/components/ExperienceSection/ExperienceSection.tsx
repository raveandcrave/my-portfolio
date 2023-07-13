import Title from '@/components/Title/Title';
import ExperienceList from '@/components/ExperienceList/ExperienceList';
import SectionMotion from '../SectionMotion/SectionMotion';

const ExperienceSection = () => {
  return (
    <SectionMotion className="py-24 mx-auto">
      <Title tag="h2" className="mb-10">
        Мой путь
      </Title>
      <ExperienceList />
    </SectionMotion>
  );
};

export default ExperienceSection;
