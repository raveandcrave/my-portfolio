import { ValidLocale, getLocalePartsFrom, locales } from "@/i18n";
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Viktor Kopan",
  description: "Frontend developer portfolio",
};

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
