import { Box, Container } from '@mui/system';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import style from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const { data: session, status } = useSession();
  const sessionStatus = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <Head>
        <title>Docs KeepCoding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={style.box}>
        <Header
          logoText="Docs KeepCoding"
          sessionStatus={sessionStatus}
          email={session?.user?.email}
          name="Keep Coding"
        />
        <Container className={style.container}>{children}</Container>
        <Footer />
      </Box>
    </>
  );
};

export default PrimaryLayout;
