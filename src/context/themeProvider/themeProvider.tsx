import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import { ThemeContext, ThemeContextSchema } from "./themeContext";
import { ThemeMode } from "styles/theme.types";
import { getTheme } from "styles/theme";

interface ThemeProviderProps {
  children: React.ReactNode;

  initialThemeMode?: ThemeMode;
}

const LOCAL_STORAGE_KEY = "th-mode";

export function ThemeProvider({
  initialThemeMode = ThemeMode.DARK,
  children,
}: ThemeProviderProps) {
  const [themeMode, _setThemeMode] = useState<ThemeMode>(initialThemeMode);

  const setThemeMode = useCallback((themeMode: ThemeMode) => {
    _setThemeMode(themeMode);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(themeMode));
  }, []);

  const handleToggleTheme = useCallback(() => {
    _setThemeMode((mode) => {
      const newMode =
        mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newMode));
      return newMode;
    });
  }, []);

  const context: ThemeContextSchema = useMemo(
    () => ({ themeMode, setThemeMode, onToggleThemeMode: handleToggleTheme }),
    [themeMode, setThemeMode, handleToggleTheme]
  );

  useEffect(() => {
    const themeMode = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    ) as ThemeMode;

    if (themeMode) {
      _setThemeMode(themeMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={context}>
      <SCThemeProvider theme={getTheme(themeMode)}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}
