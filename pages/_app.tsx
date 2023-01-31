import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <StyledEngineProvider injectFirst>
          <PrimaryLayout>
            <Component {...pageProps} />
          </PrimaryLayout>
        </StyledEngineProvider>
      </SessionProvider>
    </>
  );
}

export default App;
