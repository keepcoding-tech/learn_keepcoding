import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import ToggleTheme from '../theme/toggle/ToggleTheme';
import style from './Header.module.css';

export interface IHeader {
  logoText: string;
  sessionStatus: string;
  email: string | null | undefined;
}

const Header: React.FC<IHeader> = (header) => {
  return (
    <Box className={style.headerBox}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            className={style.headerText}
            variant="h6"
            color="var(--title-font-color)"
          >
            {header.logoText}
          </Typography>
          <h5>{header.email}</h5>
          <ToggleTheme />
          <Button
            color="inherit"
            onClick={() =>
              header.sessionStatus === 'Logout' ? signOut() : signIn()
            }
          >
            {header.sessionStatus}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
