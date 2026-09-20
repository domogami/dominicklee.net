import { createContext } from 'react';
export const initialThemeState: {
  theme: string;
  setTheme: (theme: string) => void;
} = { theme: 'Dark', setTheme: () => {} };
export default createContext(initialThemeState);
