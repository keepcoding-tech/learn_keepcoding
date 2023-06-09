const createButton = {
  backgroundColor: 'var(--success-button-color)',
  color: 'var(--primary-background-color)',
  '&:hover': {
    backgroundColor: 'var(--on-hover-button-color)',
  },
  fontSize: '18px',
};

const gridItem = {
  marginLeft: 2,
};

const paperBox = {
  backgroundColor: 'var(--paper-background-color)',
  color: 'var(--primary-font-color)',
  padding: '24px',
};

export const styles = {
  createButton,
  gridItem,
  paperBox
};
