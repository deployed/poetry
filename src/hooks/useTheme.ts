import { useContext } from "react";

import { ThemeContext } from "../context/theme";
import theme from "../theme";

const useTheme = (): typeof theme => {
  const currentTheme = useContext(ThemeContext);

  if (!currentTheme) {
    throw new Error("No theme available within the context");
  }

  return currentTheme;
};

export default useTheme;
