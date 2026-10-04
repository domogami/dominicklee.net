import {
  redirect,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router';
import WeatherJournal from '~/components/weather/WeatherJournal';
import pocket from '~/styles/pocket-app.css?url';
import notebook from '~/styles/notebook.css?url';
import weather from '~/styles/weather.css?url';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: notebook },
  { rel: 'stylesheet', href: weather },
  { rel: 'stylesheet', href: pocket },
  { rel: 'manifest', href: '/weather/manifest.webmanifest?v=dark-sketch-2' },
  {
    rel: 'apple-touch-icon',
    href: '/weather/apple-touch-icon.png?v=dark-sketch-2',
    sizes: '180x180',
  },
];
export const meta: MetaFunction = () => [
  { title: 'Weather journal · Dom Lee' },
  {
    name: 'description',
    content:
      'A playful little weather journal. Local forecasts, hand-drawn skies, and a little room for wonder.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: 'https://dominicklee.net/weather/',
  },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent',
  },
  { name: 'apple-mobile-web-app-title', content: 'Weather' },
  { property: 'og:title', content: 'Weather journal · Dom Lee' },
  {
    property: 'og:description',
    content:
      'A little weather. A little wonder. A hand-drawn forecast for your everyday.',
  },
  {
    property: 'og:image',
    content: 'https://dominicklee.net/weather/social.png',
  },
];
export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === '/weather') return redirect(`/weather/${url.search}`);
  return null;
}
export default function WeatherRoute() {
  return <WeatherJournal />;
}
