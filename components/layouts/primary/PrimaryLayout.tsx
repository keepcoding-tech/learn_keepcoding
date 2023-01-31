import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import Footer from '../../footer/Footer';
import NavigationBar from '../../headers/navbar/NavigationBar';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { data: session, status } = useSession();
  const sessionStatus = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <Head>
        <title>keepcoding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <NavigationBar sessionStatus={sessionStatus} />
        <Container
          sx={{
            paddingTop: '24px',
            paddingBottom: '45px',
            minHeight: '50vh',
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default PrimaryLayout;
