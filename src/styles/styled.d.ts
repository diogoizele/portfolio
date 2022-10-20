import {} from "styled-components";
import { CustomThemeType } from "./theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeType {}
}
