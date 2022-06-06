import { Outlet } from 'remix';
import stylesUrl from '~/styles/app.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Drinks() {
  return (
    <div className='drinks-containter'>
      <h1 className='drinks-title'>Max's Drinks</h1>
      <Outlet />
    </div>
  );
}
