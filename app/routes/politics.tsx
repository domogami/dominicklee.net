import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router';
import PoliticsGuide from '~/components/politics/PoliticsGuide';
import '@domlee/ui/styles.css';
import fonts from '@domlee/ui/fonts.css?url';
import styles from '~/styles/politics.css?url';
export const links = () => [
  { rel: 'stylesheet', href: fonts },
  { rel: 'stylesheet', href: styles },
];
export const meta: MetaFunction = () => [
  { title: 'Politics · Dom’s voting notebook' },
  {
    name: 'description',
    content:
      'A source-linked 2026 Washington election guide for Queen Anne and King County. Compare candidates and measures, and keep your choices and notes on your own device.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: 'https://dominicklee.net/politics/',
  },
  { name: 'robots', content: 'noindex, nofollow' },
];
export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === '/politics') return redirect('/politics/' + url.search);
  return null;
}
export default function PoliticsRoute() {
  return <PoliticsGuide />;
}
