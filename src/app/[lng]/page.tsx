import TitleSection from '@/components/TitleSection/TitleSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import FormSection from '@/components/FormSection/FormSection';
import {useTranslation} from '@/app/i18n';

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({params: {lng}}: HomePageProps) {
  const {t} = await useTranslation(lng);

  return (
    <>
      <TitleSection t={t} />
      <AboutSection t={t} />
      <ExperienceSection t={t} />
      <FormSection />
    </>
  );
}
