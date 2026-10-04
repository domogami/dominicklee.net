import {
  redirect,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router';
import CalculatorJournal from '~/components/calculator/CalculatorJournal';
import pocket from '~/styles/pocket-app.css?url';
import notebook from '~/styles/notebook.css?url';
import calculator from '~/styles/calculator.css?url';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: notebook },
  { rel: 'stylesheet', href: calculator },
  { rel: 'stylesheet', href: pocket },
  { rel: 'manifest', href: '/calculator/manifest.webmanifest' },
  { rel: 'apple-touch-icon', href: '/calculator/apple-touch-icon.png' },
];
export const meta: MetaFunction = () => [
  { title: 'Calculator · Dom Lee’s notebook' },
  {
    name: 'description',
    content:
      'A playful notebook calculator with scientific tools, unit conversions and a private scratchpad. Made for your pocket, and for the everyday.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: 'https://dominicklee.net/calculator/',
  },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent',
  },
  { name: 'apple-mobile-web-app-title', content: 'Calculator' },
  { property: 'og:title', content: 'Calculator · Dom Lee’s notebook' },
  { property: 'og:description', content: 'A little room to work things out.' },
  {
    property: 'og:image',
    content: 'https://dominicklee.net/calculator/social.png',
  },
];
export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === '/calculator')
    return redirect(`/calculator/${url.search}`);
  return null;
}
export default function CalculatorRoute() {
  return <CalculatorJournal />;
}
