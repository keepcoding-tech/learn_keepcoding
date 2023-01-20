import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
