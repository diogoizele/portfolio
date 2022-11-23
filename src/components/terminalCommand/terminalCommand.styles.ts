import styled, { css } from "styled-components";
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

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK ? theme.colors.textPrimary : "#515152";
  }};
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

  font-weight: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return ThemeMode.DARK === themeMode
      ? 500
      : 600;
  }};

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return ThemeMode.DARK === themeMode
      ? theme.colors.success
      : colors.green.nine;
  }};
`;
