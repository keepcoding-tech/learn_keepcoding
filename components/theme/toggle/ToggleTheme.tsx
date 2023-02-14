import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import React, { useContext } from 'react';
import ToggleThemeState from './ToggleThemeState';
import { styles } from './ToggleThemeStyles';

export interface IToggleTheme {}

const ToggleTheme: React.FC<IToggleTheme> = () => {
  const { themeState, setThemeState } = useContext(ToggleThemeState);

  function setDark() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    setThemeState('dark');
  }

  function setLight() {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    setThemeState('light');
  }

  // toggle the page theme using the checkbox
  function toggleTheme() {
    if (themeState === 'light') {
      setDark();
    } else {
      setLight();
    }
  }

  return (
    <IconButton onClick={toggleTheme} sx={styles.iconButton}>
      {themeState === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ToggleTheme;
