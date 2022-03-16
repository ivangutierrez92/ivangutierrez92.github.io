import { createContext } from 'react';
import initialState from './initialState';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={initialState}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
