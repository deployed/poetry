import React from "react";

import { ThemeProviderProps } from "./types";
import theme from "../../theme";

export const ThemeContext = React.createContext<typeof theme | undefined>(
  undefined
);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
