import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../footer/Footer';
import NavigationBar from '../../headers/navbar/NavigationBar';
import Sidebar from '../../sidebar/Sidebar';
import SidebarState from '../../sidebar/SidebarState';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { data: session, status } = useSession();
  const sessionStatus = status === 'unauthenticated' ? 'Login' : 'Logout';

  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>keepcoding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <SidebarState.Provider value={{ open, setOpen }}>
          <NavigationBar sessionStatus={sessionStatus} />
          <Sidebar
            module="Fundamentals"
            chapters={[
              'Get started with KCDP',
              'Manage your KCDP projects',
              'Platforms and frameworks',
              'Prototype and test with Emulator Suite',
            ]}
            docsIds={[
              ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
              ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
              ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
              ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
            ]}
          />
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
        </SidebarState.Provider>
      </Box>
    </>
  );
};

export default PrimaryLayout;
