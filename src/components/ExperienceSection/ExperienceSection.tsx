import Title from '@/components/Title/Title';
import ExperienceList from '@/components/ExperienceList/ExperienceList';

const ExperienceSection = () => {
  return (
    <section className="py-24 mx-auto">
      <Title tag="h2" className="mb-10">
        Мой путь
      </Title>
      <ExperienceList />
    </section>
  );
};

export default ExperienceSection;
