import { useCallback, useMemo, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import { ThemeContext, ThemeContextSchema } from "./themeContext";
import { ThemeMode } from "styles/theme.types";
import { getTheme } from "styles/theme";

interface ThemeProviderProps {
  children: React.ReactNode;

  initialThemeMode?: ThemeMode;
}

export function ThemeProvider({
  initialThemeMode = ThemeMode.DARK,
  children,
}: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);

  const handleToggleTheme = useCallback(() => {
    setThemeMode((mode) =>
      mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    );
  }, []);

  const context: ThemeContextSchema = useMemo(
    () => ({ themeMode, setThemeMode, onToggleThemeMode: handleToggleTheme }),
    [themeMode, setThemeMode, handleToggleTheme]
  );

  return (
    <ThemeContext.Provider value={context}>
      <SCThemeProvider theme={getTheme(themeMode)}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}
