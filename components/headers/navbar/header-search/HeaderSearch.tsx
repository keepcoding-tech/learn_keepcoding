import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import { styles } from './HeaderSearchStyles';

export interface IHeaderSearch {}

const HeaderSearch: React.FC<IHeaderSearch> = () => {
  const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
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

  return (
    <>
      <IconButton sx={styles.searchIconSingle}>
        <SearchIcon />
      </IconButton>
      <Search sx={styles.search}>
        <SearchIconWrapper sx={styles.searchIconWrapper}>
          <SearchIcon sx={styles.searchIcon} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          sx={styles.styledInputBase}
        />
      </Search>
    </>
  );
};

export default HeaderSearch;
