const search = {
  position: 'relative',
  backgroundColor: 'var(--tertiary-background-color)',
  '&:hover': {
    backgroundColor: 'var(--tertiary-background-color)',
  },
  marginLeft: 0,
  marginRight: '24px',
  width: '100%',
  '@media (max-width: 600px)': {
    display: 'none',
  },
};

const searchIcon = {
  color: 'var(--primary-font-color)',
};

const searchIconSingle = {
  color: 'var(--primary-font-color)',
  marginRight: '24px',
  '@media (min-width: 601px)': {
    display: 'none',
  },
};

const searchIconWrapper = {
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const styledInputBase = {
  color: 'var(--primary-font-color)',
};

export const styles = {
  search,
  searchIcon,
  searchIconSingle,
  searchIconWrapper,
  styledInputBase,
};
