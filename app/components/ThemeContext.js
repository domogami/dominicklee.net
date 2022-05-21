// ThemeContext.js
import React from 'react';

export const initialThemeState = {
  theme: 'lightMode',
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
