import type { LinksFunction, MetaFunction } from 'react-router';
import FlightPerformance from '~/components/flight/FlightPerformance';
import styles from '~/styles/flight-performance.css?url';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
export const meta: MetaFunction = () => [
  { title: 'Flight notes · Aircraft performance' },
  {
    name: 'description',
    content:
      'Turn flight logs into observed cruise and climb performance. CSV analysis, winds aloft, and the math behind every result.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: 'https://dominicklee.net/flight-performance/',
  },
];
export default function FlightPerformanceRoute() {
  return <FlightPerformance />;
}
