import { CustomThemeType, ThemeMode } from "styles/theme.types";
import backgroundImage from "../../../public/background-dark.png";
import * as colors from "styles/colors";

export const darkTheme: CustomThemeType = {
  colors: {
    white: colors.common.white,
    black: colors.common.black,

    primary: colors.teal.B400,
    secondary: colors.teal.B700,
    tertiary: colors.teal.A500,
    quaternary: colors.teal.A700,

    error: colors.actions.error,
    warning: colors.actions.warning,
    success: colors.actions.success,

    textPrimary: colors.gray.A50,
    textSecondary: colors.gray.A300,
    textTertiary: colors.gray.A500,
    textQuaternary: colors.gray.A600,
    textDisabled: colors.gray.A700,

    backgroundPrimary: colors.gray.A1000,
    backgroundSecondary: colors.gray.A900,
    backgroundAlternative: colors.gray.A800,
    backgroundTertiary: colors.gray.A700,
    backgroundQuaternary: colors.gray.A600,
    backgroundDisabled: colors.gray.A500,
  },
  backgroundImage,
  mode: ThemeMode.DARK,
  isDarkMode: true,
};
