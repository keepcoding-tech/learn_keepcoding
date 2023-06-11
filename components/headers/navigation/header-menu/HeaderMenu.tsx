import AccountCircle from '@mui/icons-material/AccountCircle';
import Dashboard from '@mui/icons-material/Dashboard';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { signIn, signOut } from 'next-auth/react';
import * as React from 'react';
import { styles } from './HeaderMenuStyles';

export interface IHeaderMenu {
  session: string;
}

const HeaderMenu: React.FC<IHeaderMenu> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // open the menu
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // signin or signout
  const handleAuth = () => {
    if (props.session === 'Login') {
      signIn();
    } else {
      signOut();
    }
    handleClose();
  };

  return (
    <>
      <Box className="box">
        <Tooltip title="Developer Profile">
          <IconButton
            onClick={handleOpen}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={styles.iconButton}
          >
            <Avatar sx={styles.avatar}>KC</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={styles.menuPaperProps}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <Typography
          variant="button"
          display="block"
          gutterBottom
          sx={styles.typography}
        >
          DEVELOPER {'  '} PROFILE
        </Typography>
        <hr className="short-divider" />
        {props.session === 'Logout' ? (
          <MenuItem onClick={handleClose} sx={styles.menuItem}>
            <ListItemIcon>
              <Dashboard fontSize="small" sx={styles.menuItemIcon} />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        ) : null}
        {props.session === 'Logout' ? (
          <MenuItem onClick={handleClose} sx={styles.menuItem}>
            <ListItemIcon>
              <AccountCircle fontSize="small" sx={styles.menuItemIcon} />
            </ListItemIcon>
            Profile
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleAuth} sx={styles.menuItem}>
          <ListItemIcon>
            {props.session === 'Login' ? (
              <Login fontSize="small" sx={styles.menuItemIcon} />
            ) : (
              <Logout fontSize="small" sx={styles.menuItemIcon} />
            )}
          </ListItemIcon>
          {props.session}
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
