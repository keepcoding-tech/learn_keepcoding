import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Head from 'next/head';
import React from 'react';
import { styles } from './PageLayoutStyles';

export interface IPageLayout {
  children: any;
}

const PageLayout: React.FC<IPageLayout> = (param) => {
  return (
    <>
      <Head>
        <title>kcdp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.box}>
        <Container sx={styles.container} maxWidth="lg">
          <Paper sx={styles.paper}>{param.children}</Paper>
        </Container>
      </Box>
    </>
  );
};

export default PageLayout;
