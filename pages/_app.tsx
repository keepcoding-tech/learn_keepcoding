import type { AppProps } from 'next/app';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </>
  );
}

export default MyApp;
