import * as React from 'react';
import usePeristedState from '../utils/usePersistedState';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeState = {
  value: string;
};

type ThemeAction = {
  type: 'LIGHTMODE' | 'DARKMODE';
  payload: string;
};

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  console.log(state.value);
  switch (action.type) {
    case 'LIGHTMODE':
      return { value: 'light' };
    case 'DARKMODE':
      return { value: 'dark' };
    default:
      return state;
  }
};

type Themes = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = React.createContext({} as Themes);

const initialState = { value: 'dark' };

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(themeReducer, initialState, () => {
    const localData = localStorage.getItem('theme');
    return localData ? JSON.parse(localData) : initialState;
  });

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };
  console.log({ state, dispatch });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
