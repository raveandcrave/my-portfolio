import langParser from "accept-language-parser";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getLocalePartsFrom, defaultLocale, locales } from "./i18n";

const findBestMatchingLocale = (acceptLangHeader: string) => {
  const parsedLangs = langParser.parse(acceptLangHeader);

  for (let i = 0; i < parsedLangs.length; i++) {
    const parsedLang = parsedLangs[i];

    const matchedLanguage = locales.find((locale) => {
      const localeParts = getLocalePartsFrom({ locale });
      return parsedLang.code === localeParts.lang;
    });

    if (matchedLanguage) {
      return matchedLanguage;
    }
  }

  return defaultLocale;
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  if (currentPathnameParts.lang === defaultLocaleParts.lang) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });

    return !pathname.startsWith(`/${localeParts.lang}`);
  });

  if (pathnameIsMissingValidLocale) {
    const matchedLocale = findBestMatchingLocale(
      request.headers.get("Accept-Language") || defaultLocale
    );

    if (matchedLocale !== defaultLocale) {
      const matchedLocaleParts = getLocalePartsFrom({ locale: matchedLocale });
      return NextResponse.redirect(
        new URL(`/${matchedLocaleParts.lang}${pathname}`, request.url)
      );
    } else {
      return NextResponse.rewrite(
        new URL(`/${defaultLocaleParts.lang}${pathname}`, request.url)
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
