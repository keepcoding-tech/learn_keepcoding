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
import { styles } from './AccountMenuStyles';

export interface IAccountMenu {
  session: string;
}

const AccountMenu: React.FC<IAccountMenu> = (param) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setAnchorEl(null);
  };

  const handleAuthClick = () => {
    setAnchorEl(null);
    if (param.session === 'Login') {
      signIn();
    } else {
      signOut();
    }
  };

  return (
    <>
      <Box className="box">
        <Tooltip title="Developer Profile">
          <IconButton
            onClick={handleClick}
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
          DEVELOPER &nbsp; PROFILE
        </Typography>
        <hr className="short-divider" />
        {param.session === 'Logout' ? (
          <MenuItem onClick={handleDashboardClick} sx={styles.menuItem}>
            <ListItemIcon>
              <Dashboard fontSize="small" sx={styles.menuItemIcon} />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        ) : null}
        {param.session === 'Logout' ? (
          <MenuItem onClick={handleProfileClick} sx={styles.menuItem}>
            <ListItemIcon>
              <AccountCircle fontSize="small" sx={styles.menuItemIcon} />
            </ListItemIcon>
            Profile
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleAuthClick} sx={styles.menuItem}>
          <ListItemIcon>
            {param.session === 'Login' ? (
              <Login fontSize="small" sx={styles.menuItemIcon} />
            ) : (
              <Logout fontSize="small" sx={styles.menuItemIcon} />
            )}
          </ListItemIcon>
          {param.session}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
