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
      <Header
        logoText="Docs KeepCoding"
        sessionStatus={sessionStatus}
        email={session?.user?.email}
      />
      <main className={style.main}>{children}</main>
      <Footer footerContent="Powered by © 2023 keepcoding" />
    </>
  );
};

export default PrimaryLayout;
