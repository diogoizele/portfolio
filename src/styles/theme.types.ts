import { StaticImageData } from "next/image";

export enum ThemeMode {
  DARK = "dark-theme",
  LIGHT = "light-theme",
}

export interface CustomThemeType {
  colors: {
    white: string;
    black: string;

    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;

    error: string;
    warning: string;
    success: string;

    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textQuaternary: string;
    textDisabled: string;

    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundQuaternary: string;
    backgroundAlternative: string;
    backgroundDisabled: string;
  };
  backgroundImage: StaticImageData;
  mode: ThemeMode;
  isDarkMode: boolean;
}
