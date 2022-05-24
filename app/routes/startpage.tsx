import ThemeSetter from '../components/ThemeSetter';
import { Outlet } from 'remix';
import React from 'react';
export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

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

export default function Startpage() {
  let todaysDate = useDate();
  return (
    <div className="startpage-containter">
      <h1>
        Welcome Back <span className="green-text">Dom</span>{' '}
      </h1>
      <Outlet />
      <h2 id="date">
        {todaysDate.date} | {todaysDate.time} | {todaysDate.wish} |{' '}
        <ThemeSetter />
      </h2>
    </div>
  );
}
