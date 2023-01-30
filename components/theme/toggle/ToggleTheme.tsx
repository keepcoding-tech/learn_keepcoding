import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from './ToggleTheme.module.css';

export interface IToggleTheme {}

const ToggleTheme: React.FC<IToggleTheme> = () => {
  const [theme, setTheme] = useState('light');

  function setDark() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    setTheme('dark');
  }

  function setLight() {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    setTheme('light');
  }

  // toggle the page theme using the checkbox
  function toggleTheme() {
    if (theme === 'light') {
      setDark();
    } else {
      setLight();
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const defaultDark =
      storedTheme === 'dark' || (storedTheme === null && prefersDark);

    if (defaultDark) {
      setDark();
    }
  }, []);

  return (
    <div className={style.toggleThemeWrapper}>
      <IconButton
        onClick={toggleTheme}
        sx={{ color: 'var(--secondary-font-color)' }}
      >
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
};

export default ToggleTheme;
