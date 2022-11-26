import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";
import * as colors from "styles/colors";

export const Line = styled.p`
  display: flex;
  align-items: center;

  white-space: nowrap;
  gap: 0.5rem;

  font-size: 1.1rem;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Path = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const ArrowIcon = styled(BsArrowRightShort).attrs({
  size: 16,
})`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Argument = styled.span``;

export const Command = styled.span`
  display: block;
  width: max-content;

  font-weight: ${() => {
    const { themeMode } = useThemeMode();

    return ThemeMode.DARK === themeMode ? 500 : 600;
  }};

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return ThemeMode.DARK === themeMode ? colors.green.B700 : colors.green.A500;
  }};
`;
