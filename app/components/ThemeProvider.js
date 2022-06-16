// ThemeProvider.js
import React, { useState, useEffect, useContext } from 'react';
import ThemeContext, { initialThemeState } from './ThemeContext';

// TODO - bug with light mode not appearing first
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  // const { theme, setTheme } = useContext(ThemeContext);
  if (typeof document !== 'undefined') {
    const localStorage = window.localStorage;
  }

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem('globalTheme');

    if (!!savedThemeLocal) {
      props.setTheme(savedThemeLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('globalTheme', props.theme);
  }, [props.theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${props.theme}`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
