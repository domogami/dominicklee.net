import { Outlet } from 'remix';
import Header from '~/components/header';
import stylesUrl from '~/styles/app.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Blog() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
