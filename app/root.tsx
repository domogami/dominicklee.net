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
  return {
    title: "I'm Dominick Lee",
    description: 'Everything Software Engineering',
    keywords: 'Dominick,Lee',
    'twitter:image': 'https://dominicklee.com/awesome.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@domogami',
    'twitter:site': '@dom3lee',
    'twitter:title': "Hey, I'm Dom",
    'twitter:description': 'Everything Software Engineering',
  };
};

export default function App() {
  const [theme, setTheme] = useState('Light');
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
