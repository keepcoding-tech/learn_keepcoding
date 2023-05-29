const select = {
  '& .MuiInputBase-root': {
    color: 'var(--primary-font-color)',
    backgroundColor: 'var(--text-field-color)',
  },
  color: 'var(--primary-font-color)',
  backgroundColor: 'var(--text-field-color)',
  borderColor: 'var(--primary-font-color)',
  '& .MuiOutlinedInput-notchedOutline': {
    '&.Mui-focused': {
      borderColor: 'var(--primary-font-color)',
    },
  },
};

const selectMenu = {
  MenuProps: {
    MenuListProps: {
      sx: {
        color: 'var(--primary-font-color)',
        backgroundColor: 'var(--text-field-color)',
      },
    },
  },
};

export const styles = {
  select,
  selectMenu,
};
