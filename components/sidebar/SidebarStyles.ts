const accordion = {
  backgroundColor: 'var(--primary-background-color)',
  color: 'var(--primary-bold-font-color)',
};

const accordionSummary = {
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
};

const doc = {
  marginBottom: '12px',
  fontSize: '14px',
};

const drawer = {
  width: 270,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 290,
    boxSizing: 'border-box',
    backgroundColor: 'var(--primary-background-color)',
    color: 'var(--primary-font-color)',
  },
  '@media (max-width: 900px)': {
    display: 'none',
  },
};

const drawerHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const fabIn = {
  backgroundColor: 'var(--primary-button-color)',
  color: 'var(--tertiary-font-color)',
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 200,
  position: 'fixed',
  '&:hover': {
    backgroundColor: 'var(--primary-button-color)',
  },
};

const fabOut = {
  backgroundColor: 'var(--primary-button-color)',
  color: 'var(--tertiary-font-color)',
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 20,
  position: 'fixed',
  '&:hover': {
    backgroundColor: 'var(--primary-button-color)',
  },
};

const icon = {
  color: 'var(--primary-font-color)',
};

const inputBase = {
  color: 'var(--primary-font-color)',
  marginLeft: 3,
};

const paper = {
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  margin: '24px 24px',
  width: 220,
  height: 30,
  backgroundColor: 'var(--tertiary-background-color)',
};

const moduleText = {
  color: 'var(--primary-bold-font-color)',
  margin: '12px 24px',
  fontSize: '14px',
};

const chapterText = {
  color: 'var(--primary-bold-font-color)',
  fontSize: '14px',
};

export const styles = {
  accordion,
  accordionSummary,
  doc,
  drawer,
  drawerHeader,
  fabIn,
  fabOut,
  icon,
  inputBase,
  paper,
  moduleText,
  chapterText,
};
