import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../footer/Footer';
import NavigationBar from '../../headers/navbar/NavigationBar';
import Sidebar from '../../sidebar/Sidebar';
import SidebarState from '../../sidebar/SidebarState';
import { styles } from './DocsLayoutStyles';

export interface IDocsLayout {
  children: any;
  status: string;
  sidebar: {
    module: string;
    chapters: string[];
    docsIds: string[][];
  };
}

const DocsLayout: React.FC<IDocsLayout> = (param) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>kcdp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.box}>
        <SidebarState.Provider value={{ open, setOpen }}>
          <NavigationBar sessionStatus={param.status} />
          <Sidebar
            module={param.sidebar.module}
            chapters={param.sidebar.chapters}
            docsIds={param.sidebar.docsIds}
          />
          <Container sx={styles.container}>{param.children}</Container>
          <Footer />
        </SidebarState.Provider>
      </Box>
    </>
  );
};

export default DocsLayout;
