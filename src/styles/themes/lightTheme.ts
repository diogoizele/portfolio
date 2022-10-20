import { CustomThemeType } from "styles/theme.types";
import backgroundImage from "../../../public/background-light.png";

export const lightTheme: CustomThemeType = {
  colors: {
    white: "#ffffff",
    black: "#000000",

    primary: "#1a9c80",
    secondary: "#4ce3c2",

    error: "#fe635a",
    warning: "#faba2c",
    success: "#2dc544",

    textPrimary: "#121214",
    textSecondary: "#222",
    textDisabled: "#2a2a2f",

    backgroundPrimary: "#E1E1F4",
    backgroundSecondary: "#a8a8b3",
    backgroundAlternative: "#9c9c9c",
    backgroundDisabled: "#3b3b41",
  },
  backgroundImage,
};
