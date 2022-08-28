import * as React from 'react';

type ThemeState = {
  value: boolean;
};

type ThemeAction = {
  type: 'LIGHTMODE' | 'DARKMODE';
  payload: boolean;
};

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  console.log(state.value);
  switch (action.type) {
    case 'LIGHTMODE':
      return { value: false };
    case 'DARKMODE':
      return { value: true };
    default:
      return state;
  }
};

type Themes = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = React.createContext({} as Themes);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(themeReducer, { value: true });
  const value = { state, dispatch };
  console.log({ state, dispatch });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
