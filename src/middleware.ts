import {NextRequest, NextResponse} from 'next/server';
import acceptLanguage from 'accept-language';
import {fallbackLng, languages} from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: '/:lang*',
};

const cookieName = 'i18next';

export function middleware(request: NextRequest) {
  let lng;

  if (request.cookies.has(cookieName)) {
    //если в куках есть язык то ставим его
    lng = acceptLanguage.get(request.cookies.get(cookieName)?.value);
  }

  if (!lng) {
    //если нет в куках то берем его из хэдеров
    lng = acceptLanguage.get(request.headers.get('Accept-Language'));
  }

  if (!lng) {
    //если языка все еще нет то дефолтный
    lng = fallbackLng;
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${lng}`, request.url));
  }

  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer') ?? `/${lng}`);
    const langInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();

    if (langInReferer) {
      response.cookies.set(cookieName, langInReferer);
    }

    return response;
  }

  return NextResponse.next();
}
