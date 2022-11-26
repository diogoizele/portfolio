import styled from "styled-components";

import { FONT_SIZE, FONT_STYLES } from "styles";

import { SubtitleProps, TitleProps, BodyProps } from "./text.types";

export const TitleH1 = styled.h1<TitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BLACK }) => fontStyle};
  font-size: ${({ fontSize = "4.5rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;
export const TitleH2 = styled.h2<TitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = "3.8rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;
export const TitleH3 = styled.h3<TitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = "3rem" }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;
export const SubtitleH4 = styled.h4<SubtitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.BOLD }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.LARGE }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textTertiary};
`;
export const SubtitleStrong = styled.strong<SubtitleProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.REGULAR }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.REGULAR }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};
`;
export const BodyP = styled.p<BodyProps>`
  font-weight: ${({ fontStyle = FONT_STYLES.REGULAR }) => fontStyle};
  font-size: ${({ fontSize = FONT_SIZE.REGULAR }) => fontSize};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};
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
