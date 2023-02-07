import React from 'react';

const ToggleThemeState = {
  themeState: 'light',
  setThemeState: (_theme: string) => {},
};

export default React.createContext(ToggleThemeState);
