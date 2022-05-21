import stylesUrl from '~/styles/app.css';
import Header from '~/components/header';
import Home from '~/pages/home';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
