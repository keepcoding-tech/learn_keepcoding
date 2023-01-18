import Head from 'next/head';
import React from 'react';
import style from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Docs KeepCoding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>{children}</main>

      <footer className={style.footer}>Powered by © 2023 keepcoding</footer>
    </>
  );
};

export default PrimaryLayout;
