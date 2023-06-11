import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';
import ToggleTheme from '../../theme/toggle/ToggleTheme';
import { styles } from './NavigationHeaderStyles';
import HeaderMenu from './header-menu/HeaderMenu';
import HeaderSearch from './header-search/HeaderSearch';

export interface INavigationHeader {
  sessionStatus: string;
}

const NavigationHeader: React.FC<INavigationHeader> = (props) => {
  return (
    <Box>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Link href="/" className="link">
            <Typography variant="h5">KeepCoding</Typography>
          </Link>
          <div className="expander"></div>
          <HeaderSearch />
          <ToggleTheme />
          <HeaderMenu session={props.sessionStatus} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationHeader;
