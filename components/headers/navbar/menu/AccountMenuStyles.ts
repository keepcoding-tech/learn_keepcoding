const avatar = {
  width: '40px',
  height: '40px',
};

const iconButton = {
  marginLeft: '20px',
};

const menuPaperProps = {
  elevation: 0,
  sx: {
    bgcolor: 'var(--tertiary-background-color)',
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'var(--tertiary-background-color)',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};

const menuItem = {
  color: 'var(--primary-font-color)',
};

const menuItemIcon = {
  color: 'var(--primary-font-color)',
};

const typography = {
  marginLeft: '10px',
  marginRight: '10px',
  color: 'var(--primary-font-color)',
};

export const styles = {
  avatar,
  iconButton,
  menuPaperProps,
  menuItem,
  menuItemIcon,
  typography,
};
