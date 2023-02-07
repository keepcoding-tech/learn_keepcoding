const search = {
  position: 'relative',
  backgroundColor: 'var(--text-field-color)',
  '&:hover': {
    backgroundColor: 'var(--text-field-color)',
  },
  marginLeft: 0,
  marginRight: '24px',
  width: '100%',
};

const searchIcon = {
  color: 'var(--primary-font-color)',
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
  searchIconWrapper,
  styledInputBase,
};
