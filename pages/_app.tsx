import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import ToggleThemeState from '../components/theme/toggle/ToggleThemeState';
import '../public/styles/globals.css';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [themeState, setThemeState] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const defaultDark =
      storedTheme === 'dark' || (storedTheme === null && prefersDark);

    if (defaultDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setThemeState('dark');
    }
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <StyledEngineProvider injectFirst>
          <ToggleThemeState.Provider value={{ themeState, setThemeState }}>
            <Component {...pageProps} />
          </ToggleThemeState.Provider>
        </StyledEngineProvider>
      </SessionProvider>
    </>
  );
}

export default App;
