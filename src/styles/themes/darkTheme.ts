import { CustomThemeType } from "styles/theme.types";
import backgroundImage from "../../../public/background-dark.png";

export const darkTheme: CustomThemeType = {
  colors: {
    white: "#ffffff",
    black: "#000000",

    primary: "#4ce3c2",
    secondary: "#1a9c80",

    error: "#fe635a",
    warning: "#faba2c",
    success: "#2dc544",

    textPrimary: "#E1E1F4",
    textSecondary: "#a8a8b3",
    textDisabled: "#9c9c9c",

    backgroundPrimary: "#121214",
    backgroundSecondary: "#222",
    backgroundAlternative: "#2a2a2f",
    backgroundDisabled: "#3b3b41",
  },
  backgroundImage,
};
