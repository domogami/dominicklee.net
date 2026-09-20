import ThemeSetter from '../components/ThemeSetter';
import { useOutletContext } from 'react-router';
import { Outlet } from 'react-router';
import React from 'react';

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState<Date | null>(null); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    setDate(new Date());
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  if (!today) return { date: '', time: '', wish: '' };
  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'
  } `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return {
    date,
    time,
    wish,
  };
};

export type themeSet = {
  theme: string;
  [Symbol.iterator](): Iterator<any>;
};

export default function Startpage() {
  const [theme, setTheme] = useOutletContext<themeSet>();
  let todaysDate = useDate();

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !window.localStorage.getItem('globalTheme')
    ) {
      setTheme('Dark');
    }
  }, [setTheme]);

  return (
    <div className='startpage-containter'>
      <h1>
        Welcome Back <span className='green-text'>Dom</span>{' '}
      </h1>
      <Outlet />
      <h2 id='date'>
        {todaysDate.date} | {todaysDate.time} | {todaysDate.wish} |{' '}
        <ThemeSetter theme={theme} changeTheme={(theme) => setTheme(theme)} />
      </h2>
    </div>
  );
}
