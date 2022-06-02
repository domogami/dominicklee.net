import stylesUrl from '~/styles/app.css';
import Header from '~/components/header';
import Home from '~/pages/home';
import { useOutletContext } from "@remix-run/react";
export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export type themeSet = {
  theme: String;
};
export default function IndexRoute(props) {
  const [theme, setTheme] = useOutletContext<themeSet>();
  return (
    <div>
      <Header changeTheme={theme => setTheme(theme)} />
      <Home />
    </div>
  );
}
