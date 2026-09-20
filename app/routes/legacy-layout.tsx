import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import ThemeContext from '~/components/ThemeContext';
export default function LegacyLayout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(
    pathname.startsWith('/startpage') ? 'Dark' : 'Light'
  );
  useEffect(() => {
    const saved = localStorage.getItem('globalTheme');
    if (saved === 'Light' || saved === 'Dark') setTheme(saved);
  }, []);
  useEffect(() => {
    document.body.classList.add(`theme--${theme}`);
    document.documentElement.classList.add(`theme--${theme}`);
    return () => {
      document.body.classList.remove(`theme--${theme}`);
      document.documentElement.classList.remove(`theme--${theme}`);
    };
  }, [theme]);
  const update = (value: string) => {
    setTheme(value);
    localStorage.setItem('globalTheme', value);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme: update }}>
      <div className={`theme--${theme}`}>
        <Outlet context={[theme, update]} />
      </div>
    </ThemeContext.Provider>
  );
}
