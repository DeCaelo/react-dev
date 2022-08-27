import * as React from "react";

type Theme = {
  text: string;
  primary: string;
  secondary: string;
  toggleIcon: string;
  moon: string;
  background: string;
  yellow1: string;
  darkText: string;
  darkPrimary: string;
  darkSecondary: string;
  darkToggleIcon: string;
  darkBackground: string;
};

type Themes = {
  [key: string]: Theme;
};

const themes: Themes = {
  colors: {
    text: `#231f20`,
    primary: `#f59e0b`,
    secondary: `#5f6c80`,
    toggleIcon: `#334155`,
    moon: `#553C9A`,
    background: `#f5f4f2`,
    yellow1: `#FFC700`,
    // dark

    darkText: `#afa7d4`,
    darkPrimary: `#fbbf24`,
    darkSecondary: `#7f8ea3`,
    darkToggleIcon: `#cbd5e1`,
    darkBackground: `#2a2734`,
  },
};

export const ThemeContext = React.createContext(themes);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
