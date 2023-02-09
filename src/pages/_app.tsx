import type { AppProps } from 'next/app';

import { CookieAccept } from '@/components/atoms/CookieAccept';
import { AppContext } from '@/contexts';
import { GlobalStyles } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Component {...pageProps} />

      <CookieAccept />

      <GlobalStyles />
    </AppContext>
  );
}
