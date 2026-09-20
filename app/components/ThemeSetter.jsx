import { useContext } from 'react';
import ThemeContext from './ThemeContext';
export default function ThemeSetter(props) {
  const context = useContext(ThemeContext);
  return (
    <select
      className={`theme-selector ${props.className || ''}`}
      aria-label='Color theme'
      value={props.theme || context.theme}
      onChange={(event) =>
        (props.changeTheme || context.setTheme)(event.target.value)
      }
    >
      <option>Light</option>
      <option>Dark</option>
    </select>
  );
}
