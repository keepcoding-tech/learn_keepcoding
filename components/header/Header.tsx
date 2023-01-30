import SearchIcon from '@mui/icons-material/Search';
import { alpha, Grid, InputBase, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import BasicMenu from '../templates/menu/BasicMenu';
import ToggleTheme from '../theme/toggle/ToggleTheme';
import logo from './../../public/favicon.ico';
import style from './Header.module.css';

export interface IHeader {
  logoText: string;
  sessionStatus: string;
  name: string | null | undefined;
  email: string | null | undefined;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 20,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header: React.FC<IHeader> = () => {
  return (
    <Box className={style.headerBox}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <Image src={logo} alt="Logo" style={{ width: 30, height: 30 }} />
            </Grid>
            <Grid item>
              <Typography
                className={style.headerText}
                variant="h6"
                color="var(--title-font-color)"
              >
                KeepCoding
              </Typography>
            </Grid>
          </Grid>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ToggleTheme />
          <BasicMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
