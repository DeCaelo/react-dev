import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

export const useTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleChange = (theme: string | boolean) =>
    setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, handleChange] as const;
};
