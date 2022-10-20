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

    error: string;
    warning: string;
    success: string;

    textPrimary: string;
    textSecondary: string;
    textDisabled: string;

    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundAlternative: string;
    backgroundDisabled: string;
  };
  backgroundImage: StaticImageData;
}
