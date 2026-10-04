import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
} from 'react-router';
import type { Route } from './+types/root';
import TouchFeedback from './components/TouchFeedback';
import SketchArrow from './components/notebook/SketchArrow';
import touchFeedbackStyles from './styles/touch-feedback.css?url';
export const links = () => [{ rel: 'stylesheet', href: touchFeedbackStyles }];
export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const app = /^\/(weather|calculator)(?:\/|$)/.exec(pathname)?.[1];
  const favicon = app
    ? `/${app}/icon.svg?v=dark-sketch-2`
    : '/favicon.svg?v=hexagon';
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,viewport-fit=cover'
        />
        <meta name='theme-color' content='#0e7c79' />
        <link rel='icon' href={favicon} type='image/svg+xml' />
        <Meta />
        <Links />
      </head>
      <body>
        <TouchFeedback>{children}</TouchFeedback>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return <Outlet />;
}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const missing = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main
      style={{
        fontFamily: 'system-ui',
        padding: '10vw',
        background: '#efe7d7',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <h1>
        {missing ? 'This page has been folded away.' : 'Something went wrong.'}
      </h1>
      <p>
        {missing
          ? 'Try the notebook, or wander through my digital garden.'
          : 'Please refresh the page and try again.'}
      </p>
      <a href='/'>Back to the notebook</a> ·{' '}
      <a href='https://domogami.github.io/'>
        Digital garden <SketchArrow />
      </a>
    </main>
  );
}
