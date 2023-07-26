import {dir} from 'i18next';
import {languages} from '../i18n/settings';

import '../globals.css';
import {Inter} from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {Providers} from '../Providers/Providers';
import styles from './Layout.module.css';
import BlackScreen from '@/components/BlackScreen/BlackScreen';
import Up from '@/components/Up/Up';

const inter = Inter({subsets: ['latin', 'cyrillic']});

export const metadata = {
  title: 'Viktor Kopan',
  description: 'Frontend developer portfolio',
};

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
    <html lang={lng} dir={dir(lng)}>
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
