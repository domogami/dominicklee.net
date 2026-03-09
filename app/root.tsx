import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import ThemeProvider from './components/ThemeProvider';
import { useState } from 'react';
export const meta: MetaFunction = () => {
  return [
    { title: "I'm Dominick Lee" },
    { name: 'description', content: 'Everything Software Engineering' },
    { name: 'keywords', content: 'Dominick,Lee' },
    { name: 'twitter:image', content: 'https://dominicklee.com/awesome.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@domogami' },
    { name: 'twitter:site', content: '@dom3lee' },
    { name: 'twitter:title', content: "Hey, I'm Dom" },
    { name: 'twitter:description', content: 'Everything Software Engineering' },
  ];
};

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() =>
    location.pathname.startsWith('/startpage') ? 'Dark' : 'Light'
  );
  return (
    <html lang='en' className={`theme--${theme}`}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className={`theme--${theme}`}>
        <ThemeProvider theme={theme} setTheme={setTheme}>
          <Outlet context={[theme, setTheme]} />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </ThemeProvider>
      </body>
    </html>
  );
}
