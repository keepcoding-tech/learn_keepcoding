const textField = {
  '& .MuiInputBase-root': {
    color: 'var(--primary-font-color)',
    backgroundColor: 'var(--tertiary-background-color)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--tertiary-background-color)',
      borderWidth: '5px',
    },
    '&:hover fieldset': {
      borderColor: 'var(--tertiary-background-color)',
      borderWidth: '5px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--tertiary-background-color)',
      borderWidth: '5px',
    },
  },
  input: {
    color: 'var(--primary-font-color)',
    backgroundColor: 'var(--tertiary-background-color)',
  },
  textarea: {
    color: 'var(--primary-font-color)',
    backgroundColor: 'var(--tertiary-background-color)',
  },
};

export const styles = {
  textField,
};
