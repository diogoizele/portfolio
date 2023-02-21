import styled from "styled-components";

import { FONT_SIZE, FONT_STYLES } from "styles";

import { SubtitleProps, TitleProps, BodyProps } from "./text.types";

type StyledTitleProps = TitleProps & {
  color: string;
};

type StyledSubtitleProps = SubtitleProps & {
  color: string;
};

type StyledBodyProps = BodyProps & {
  color: string;
};

export const TitleH1 = styled.h1<StyledTitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BLACK }) => fontStyle};
  font-size: ${({ fontSize = "4.5rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;
export const TitleH2 = styled.h2<StyledTitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = "3.8rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;
export const TitleH3 = styled.h3<StyledTitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = "3rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;
export const SubtitleH4 = styled.h4<StyledSubtitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.LARGE }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textTertiary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;
export const SubtitleStrong = styled.strong<StyledSubtitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.REGULAR }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.REGULAR }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;
export const BodyP = styled.p<StyledBodyProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.REGULAR }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.REGULAR }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};

  text-align: ${({ align = "inherit" }) => align};

  ${({ mediaSize }) =>
    mediaSize &&
    `
      @media (max-width: 590px) {
        font-size: ${mediaSize};
      }`}
`;

const styledComponents = {
  h1: TitleH1,
  h2: TitleH2,
  h3: TitleH3,
  h4: SubtitleH4,
  strong: SubtitleStrong,
  p: BodyP,
};

export default styledComponents;
