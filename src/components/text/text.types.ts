import { FONT_STYLES } from "styles/font-styles";

export type TitleComponents = "h1" | "h2" | "h3";
export type SubtitleComponents = "h4" | "strong";
export type BodyComponents = "p";
export type AvailableComponents =
  | TitleComponents
  | SubtitleComponents
  | BodyComponents;

export interface TextProps {
  children?: React.ReactNode;

  color?: string;
  fontStyle?: FONT_STYLES | string | number;
  fontSize?: string | number;

  style?: React.CSSProperties;

  mediaSize?: string;
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
