import Logo from '../images/Logo_Transparent.svg';
import ThemeSetter from './ThemeSetter';
import { useState } from 'react';

export default function Header(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className='header-container'>
      <div className='header'>
        <img src={Logo} alt='logo' />
        <ul>
          <li className='active'>
            <a href='/'>Home</a>
          </li>
          <li className='non-active'>
            <a href='/#projects'> Projects</a>
          </li>
          <li className='non-active'>
            <a href='/blog'> Blog</a>
          </li>
          <li className='non-active'>
            <a href='/#contact'> Contact</a>
          </li>
        </ul>
        {true ? (
          <ThemeSetter changeTheme={props.changeTheme} />
        ) : (
          <div
            className={`menu-btn${menuIsOpen ? ' open' : ''}`}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <div className='menu-btn__burger'></div>
          </div>
        )}
      </div>
    </div>
  );
}
