import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import style from './Header.module.css';

export interface IHeader {
  logoText: string;
  signInOrOut: string;
}

const Header: React.FC<IHeader> = ({ logoText, signInOrOut }) => {
  return (
    <Box className={style.headerBox}>
      <AppBar className="appBar" position="static">
        <Toolbar>
          <Typography className={style.headerText} variant="h6" component="div">
            {logoText}
          </Typography>
          <Button
            color="inherit"
            onClick={() => (signInOrOut === 'Logout' ? signOut() : signIn())}
          >
            {signInOrOut}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
