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

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');

  //   const prefersDark =
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches;

  //   const defaultDark =
  //     storedTheme === 'dark' || (storedTheme === null && prefersDark);

  //   if (defaultDark) {
  //     setDark();
  //   }
  // }, []);

  return (
    <IconButton onClick={toggleTheme} sx={styles.iconButton}>
      {themeState === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ToggleTheme;
