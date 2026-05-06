import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export function proxy(request: any) {
  return createIntlMiddleware(routing)(request);
}

export default proxy;

export const config = {
  matcher: ['/', '/(vi|en)/:path*']
};
