import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import ThemeProvider from './components/ThemeProvider';
import { useState } from 'react';
export const meta: MetaFunction = () => {
  return { title: "I'm Dominick Lee" };
};

export default function App() {
  const [theme, setTheme] = useState('Dark');
  return (
    <html lang="en" className={`theme--${theme}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`theme--${theme}`}>
        <ThemeProvider>
          <Outlet context={[theme, setTheme]} />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </ThemeProvider>
      </body>
    </html>
  );
}
