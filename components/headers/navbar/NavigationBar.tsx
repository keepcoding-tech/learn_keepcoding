import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import ToggleTheme from '../../theme/toggle/ToggleTheme';
import logo from './../../../public/vercel.svg';
import HeaderSearch from './header-search/HeaderSearch';
import BasicMenu from './menu/AccountMenu';

export interface INavigationBar {
  sessionStatus: string;
}

const NavigationBar: React.FC<INavigationBar> = (props) => {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'var(--header-footer-color)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Image
            onClick={() => Router.push('/')}
            src={logo}
            alt="Logo"
            style={{
              width: '150px',
              height: '50px',
            }}
          />
          <div className="expander"></div>
          <HeaderSearch />
          <ToggleTheme />
          <BasicMenu session={props.sessionStatus} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
