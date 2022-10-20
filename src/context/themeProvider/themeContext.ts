import { ThemeMode } from "styles/theme.types";
import { createContext } from "react";

export interface ThemeContextSchema {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  onToggleThemeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextSchema>(
  {} as ThemeContextSchema
);
