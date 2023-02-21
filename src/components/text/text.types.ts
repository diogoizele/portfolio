import { FONT_STYLES } from "styles/font-styles";
import { CustomThemeType } from "styles/theme.types";

export type TitleComponents = "h1" | "h2" | "h3";
export type SubtitleComponents = "h4" | "strong";
export type BodyComponents = "p";
export type AvailableComponents =
  | TitleComponents
  | SubtitleComponents
  | BodyComponents;

interface CustomColorProps {
  color?: (theme: CustomThemeType) => string | string;
}

export interface TextProps {
  children?: React.ReactNode;

  fontStyle?: FONT_STYLES | string | number | React.CSSProperties["fontWeight"];
  fontSize?: string | number;

  style?: React.CSSProperties;

  mediaSize?: string;

  align?: "left" | "center" | "right" | "justify";
}

export interface TitleProps extends TextProps {
  component?: TitleComponents;
}

export interface SubtitleProps extends TextProps {
  component?: SubtitleComponents;
}

export interface BodyProps extends TextProps {
  component?: BodyComponents;
}
