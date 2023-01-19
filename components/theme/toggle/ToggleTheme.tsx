import React from 'react';
import style from './ToggleTheme.module.css';

export interface IToggleTheme {}

const ToggleTheme: React.FC<IToggleTheme> = () => {
  // toggle the page theme using the checkbox
  function toggleTheme(event: any) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  return (
    <div className={style.toggleThemeWrapper}>
      <span>☀️</span>
      <label className={style.toggleTheme} htmlFor="checkbox">
        <input
          className={style.themeCheckbox}
          type="checkbox"
          id="checkbox"
          defaultChecked={false}
          onChange={toggleTheme}
        />
        <div className={style.slider + ' ' + style.round}></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default ToggleTheme;
