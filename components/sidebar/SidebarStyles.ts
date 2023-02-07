const accordion = {
  backgroundColor: 'var(--cards-color)',
  color: 'var(--secondary-font-color)',
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
    backgroundColor: 'var(--cards-color)',
    color: 'var(--secondary-font-color)',
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
  backgroundColor: 'var(--background-color)',
  color: 'var(--primary-font-color)',
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 200,
  position: 'fixed',
  '&:hover': {
    backgroundColor: 'var(--background-color)',
  },
};

const fabOut = {
  backgroundColor: 'var(--background-color)',
  color: 'var(--primary-font-color)',
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 20,
  position: 'fixed',
  '&:hover': {
    backgroundColor: 'var(--background-color)',
  },
};

const icon = {
  color: 'var(--primary-font-color)',
};

const inputBase = {
  marginLeft: 3,
  color: 'var(--primary-font-color)',
};

const paper = {
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  margin: '24px 24px',
  width: 220,
  height: 30,
  backgroundColor: 'var(--text-field-color)',
};

const moduleText = {
  margin: '12px 24px',
  fontSize: '14px',
};

const chapterText = {
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
