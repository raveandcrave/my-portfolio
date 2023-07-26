import {dir} from 'i18next';
import {Metadata} from 'next';
import {languages} from '../i18n/settings';

import '../globals.css';
import {Inter} from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {Providers} from '../Providers/Providers';
import styles from './Layout.module.css';
import BlackScreen from '@/components/BlackScreen/BlackScreen';
import Up from '@/components/Up/Up';
import {useTranslation} from '../i18n';

const inter = Inter({subsets: ['latin', 'cyrillic']});

export const metadata = {
  title: 'Viktor Kopan',
  description: 'Frontend developer portfolio',
};

export async function generateMetadata({
  params: {lng},
}: {
  params: {
    lng: string;
  };
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {t} = await useTranslation(lng, 'meta');

  return {
    title: t('title'),
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // }, мое фото
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}));
}

export default function RootLayout({
  children,
  params: {lng},
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <Providers lng={lng}>
        <body className={inter.className}>
          <div className={styles.wrapper}>
            <BlackScreen />
            <Header className={styles.header} lang={lng} />
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer} />
            <Up />
          </div>
        </body>
      </Providers>
    </html>
  );
}
