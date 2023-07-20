import {ValidLocale, getDictionary} from '@/i18n';
import TitleSection from '@/components/TitleSection/TitleSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import FormSection from '@/components/FormSection/FormSection';

interface HomePageProps {
  params: {
    lang: ValidLocale;
  };
}

export default async function Home({params: {lang}}: HomePageProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <TitleSection />
      <AboutSection />
      <ExperienceSection />
      <FormSection />
    </>
  );
}
