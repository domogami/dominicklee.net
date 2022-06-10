import { Outlet } from 'remix';
import Header from '~/components/header';
import stylesUrl from '~/styles/app.css';
import { useOutletContext } from '@remix-run/react';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export type themeSet = {
  theme: String;
};

export default function Blog() {
  const [theme, setTheme] = useOutletContext<themeSet>();
  return (
    <div>
      <Header theme={theme} changeTheme={(theme) => setTheme(theme)} />
      <Outlet />
    </div>
  );
}
