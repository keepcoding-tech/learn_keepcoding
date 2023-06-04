const select = {
  '& .MuiInputBase-root': {
    color: 'var(--primary-font-color)',
    backgroundColor: 'var(--tertiary-background-color)',
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--tertiary-background-color)',
    borderWidth: '5px',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--tertiary-background-color)',
    borderWidth: '5px',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--tertiary-background-color)',
    borderWidth: '5px',
  },
  color: 'var(--primary-font-color)',
  backgroundColor: 'var(--tertiary-background-color)',
  borderColor: 'var(--tertiary-background-color)',
  '& .MuiOutlinedInput-notchedOutline': {
    '&.Mui-focused': {
      borderColor: 'var(--tertiary-background-color)',
    },
  },
};

const selectMenu = {
  MenuProps: {
    MenuListProps: {
      sx: {
        color: 'var(--primary-font-color)',
        backgroundColor: 'var(--tertiary-background-color)',
      },
    },
  },
};

export const styles = {
  select,
  selectMenu,
};
