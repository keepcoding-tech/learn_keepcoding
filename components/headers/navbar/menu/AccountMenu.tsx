import AccountCircle from '@mui/icons-material/AccountCircle';
import Dashboard from '@mui/icons-material/Dashboard';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { signIn, signOut } from 'next-auth/react';
import * as React from 'react';

export interface IAccountMenu {
  session: string;
}

const AccountMenu: React.FC<IAccountMenu> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuthClick = () => {
    setAnchorEl(null);
    if (props.session === 'Login') {
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
            sx={{
              marginLeft: '20px',
            }}
          >
            <Avatar
              sx={{
                width: '40px',
                height: '40px',
              }}
            >
              KC
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: 'var(--cards-color)',
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
              bgcolor: 'var(--cards-color)',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
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
          sx={{
            marginLeft: '10px',
            marginRight: '10px',
            color: 'var(--primary-font-color)',
          }}
        >
          DEVELOPER &nbsp; PROFILE
        </Typography>
        <Divider className="divider" />
        {props.session === 'Logout' ? (
          <MenuItem
            onClick={handleClose}
            sx={{
              color: 'var(--primary-font-color)',
            }}
          >
            <ListItemIcon>
              <Dashboard
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        ) : null}
        {props.session === 'Logout' ? (
          <MenuItem
            onClick={handleClose}
            sx={{
              color: 'var(--primary-font-color)',
            }}
          >
            <ListItemIcon>
              <AccountCircle
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            </ListItemIcon>
            Profile
          </MenuItem>
        ) : null}
        <MenuItem
          onClick={handleAuthClick}
          sx={{
            color: 'var(--primary-font-color)',
          }}
        >
          <ListItemIcon>
            {props.session === 'Login' ? (
              <Login
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            ) : (
              <Logout
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            )}
          </ListItemIcon>
          {props.session}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
