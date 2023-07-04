import { ValidLocale, getDictionary } from "@/i18n";

interface HomePageProps {
  params: {
    lang: ValidLocale;
  };
}

export default async function Home({ params: { lang } }: HomePageProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <h1>{dict.home.title}</h1>
    </>
  );
}
