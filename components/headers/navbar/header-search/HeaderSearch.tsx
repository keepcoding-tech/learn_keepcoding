import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React from 'react';

export interface IHeaderSearch {}

const HeaderSearch: React.FC<IHeaderSearch> = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'var(--text-field-color)',
    '&:hover': {
      backgroundColor: 'var(--text-field-color)',
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
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            style={{
              color: 'var(--primary-font-color)',
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            color: 'var(--primary-font-color)',
          }}
        />
      </Search>
    </>
  );
};

export default HeaderSearch;
