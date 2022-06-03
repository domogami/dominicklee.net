// ThemeContext.js
import React from 'react';

export const initialThemeState = {
  theme: 'Light',
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
