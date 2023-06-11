const accordion = {
  backgroundColor: 'var(--secondary-background-color)',
  color: 'var(--secondary-font-color)',
};

const accordionSummary = {
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
};

const doc = {
  margin: '-12px 0px 12px 12px',
  fontSize: '16px',
};

const drawer = {
  width: 270,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: 'var(--secondary-background-color)',
    color: 'var(--secondary-font-color)',
    width: 290,
    boxSizing: 'border-box',
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
  backgroundColor: 'var(--tertiary-background-color)',
  color: 'var(--secondary-font-color)',
  '&:hover': {
    backgroundColor: 'var(--tertiary-background-color)',
  },
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 200,
  position: 'fixed',
};

const fabOut = {
  backgroundColor: 'var(--tertiary-background-color)',
  color: 'var(--secondary-font-color)',
  '&:hover': {
    backgroundColor: 'var(--tertiary-background-color)',
  },
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 20,
  left: 20,
  position: 'fixed',
};

const icon = {
  color: 'var(--secondary-font-color)',
};

const inputBase = {
  color: 'var(--secondary-font-color)',
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
  color: 'var(--secondary-font-color)',
  margin: '12px',
  fontSize: '18px',
  justifyContent: 'space-evenly',
  display: 'flex',
};

const chapterText = {
  color: 'var(--secondary-font-color)',
  fontSize: '16px',
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
