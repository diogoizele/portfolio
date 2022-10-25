import { useThemeMode } from "hooks";
import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

export const Line = styled.p`
  font-size: 1.2rem;

  color: ${({ theme }) => {
    const { themeMode } = useThemeMode();

    return ThemeMode.DARK === themeMode
      ? theme.colors.textSecondary
      : theme.colors.backgroundDisabled;
  }};
`;
