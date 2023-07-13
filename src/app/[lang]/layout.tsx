import {ValidLocale, getLocalePartsFrom, locales} from '@/i18n';
import '../globals.css';
import {Inter} from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {Providers} from '../Theme/Providers';
import styles from './Layout.module.css';
import BlackScreen from '@/components/BlackScreen/BlackScreen';

const inter = Inter({subsets: ['latin', 'cyrillic']});

export const metadata = {
  title: 'Viktor Kopan',
  description: 'Frontend developer portfolio',
};

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({locale}));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: ValidLocale;
  };
}) {
  return (
    <html lang={params.lang}>
      <Providers>
        <body className={inter.className}>
          <div className={styles.wrapper}>
            <BlackScreen />
            <Header className={styles.header} lang={params.lang} />
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer} />
          </div>
        </body>
      </Providers>
    </html>
  );
}
