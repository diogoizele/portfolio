import { CustomThemeType, ThemeMode } from "styles/theme.types";
import backgroundImage from "../../../public/background-light-2.png";
import * as colors from "styles/colors";

export const lightTheme: CustomThemeType = {
  colors: {
    white: colors.common.white,
    black: colors.common.black,

    primary: "#FF8A65", // colors.teal.A600,
    secondary: "#FF5722", // colors.teal.B700,
    tertiary: "#FFCCBC", // colors.teal.B400,
    quaternary: "#FFE0D6", // colors.teal.A300,

    error: colors.actions.error,
    warning: colors.actions.warning,
    success: colors.actions.success,

    textPrimary: colors.gray.A1000,
    textSecondary: colors.gray.A900,
    textTertiary: colors.gray.A700,
    textQuaternary: colors.gray.A500,
    textDisabled: colors.gray.A700,

    backgroundPrimary: colors.gray.A250,
    backgroundSecondary: colors.gray.A300,
    backgroundTertiary: colors.gray.A400,
    backgroundQuaternary: colors.gray.A500,
    backgroundAlternative: colors.gray.A800,
    backgroundDisabled: colors.gray.A600,
  },
  backgroundImage,
  mode: ThemeMode.LIGHT,
  isDarkMode: false,
};
