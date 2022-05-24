// ThemeContext.js
import React from 'react';

export const initialThemeState = {
  theme: 'Dark',
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
