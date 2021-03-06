//ThemeSetter.js
import React, { useContext, useState } from 'react';

import ThemeContext from './ThemeContext';

export default function ThemeSetter(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  // const [theme, setTheme] = useState(initialThemeState.theme);
  return (
    <select
      className='theme-selector'
      value={props.theme}
      onChange={(e) => {
        setTheme(e.currentTarget.value);
        props.changeTheme(e.currentTarget.value);
      }}
    >
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

const themeOptions = [{ value: 'Light' }, { value: 'Dark' }];
