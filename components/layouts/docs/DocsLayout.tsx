import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Head from 'next/head';
import React, { useState } from 'react';
import DocsFooter from '../../footers/docs/DocsFooter';
import NavigationHeader from '../../headers/navigation/NavigationHeader';
import DocsSidebar from '../../sidebars/docs/DocsSidebar';
import SidebarState from '../../sidebars/docs/DocsSidebarState';
import { styles } from './DocsLayoutStyles';

export interface IDocsLayout {
  children: any;
  status: string;
  sidebar: {
    module: {
      id: string;
      title: string;
    };
    chapters: {
      id: string;
      title: string;
      documents: {
        id: string;
        title: string;
      }[];
    }[];
    currentChapter: string;
  };
}

const DocsLayout: React.FC<IDocsLayout> = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>keepcoding</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Box sx={styles.box}>
        <SidebarState.Provider value={{ open, setOpen }}>
          <NavigationHeader sessionStatus={props.status} />
          <DocsSidebar
            module={props.sidebar.module}
            chapters={props.sidebar.chapters}
            currentChapter={props.sidebar.currentChapter}
          />
          <Container sx={styles.container}>{props.children}</Container>
          <DocsFooter />
        </SidebarState.Provider>
      </Box>
    </>
  );
};

export default DocsLayout;
