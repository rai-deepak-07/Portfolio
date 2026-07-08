import { createContext, useContext, useEffect, useState } from "react";

import {
  THEME,
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  setStoredTheme,
} from "../utils/theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    getStoredTheme() || THEME.SYSTEM
  );

  const [resolvedTheme, setResolvedTheme] = useState(
    getSystemTheme()
  );

  /**
   * Apply selected theme
   */
  useEffect(() => {
    applyTheme(theme);

    setResolvedTheme(
      theme === THEME.SYSTEM
        ? getSystemTheme()
        : theme
    );

    setStoredTheme(theme);
  }, [theme]);

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const listener = () => {
      if (theme === THEME.SYSTEM) {
        applyTheme(THEME.SYSTEM);
        setResolvedTheme(getSystemTheme());
      }
    };

    media.addEventListener("change", listener);

    return () =>
      media.removeEventListener("change", listener);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}