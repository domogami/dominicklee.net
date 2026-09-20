import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router';
import type { Route } from './+types/root';
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='theme-color' content='#0e7c79' />
        <link rel='icon' href='/favicon.svg?v=hexagon' type='image/svg+xml' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
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
      <a href='https://domogami.github.io/'>Digital garden ↗</a>
    </main>
  );
}
