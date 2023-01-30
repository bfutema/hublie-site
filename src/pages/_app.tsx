import type { AppProps } from 'next/app';

import { AppContext } from '@/contexts';
import { GlobalStyles } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Component {...pageProps} />

      <GlobalStyles />
    </AppContext>
  );
}
