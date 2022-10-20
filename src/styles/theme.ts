import { ThemeMode, CustomThemeType } from "./theme.types";

import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

export const theme = {
  [ThemeMode.DARK]: darkTheme,
  [ThemeMode.LIGHT]: lightTheme,
} as Record<ThemeMode, CustomThemeType>;

export function getTheme(mode: ThemeMode) {
  return theme[mode];
}
