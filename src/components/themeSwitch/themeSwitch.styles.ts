import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

interface ThemeSwitchContainerProps {
  themeMode: ThemeMode;
  isMenuOpen: boolean;
}

export const ThemeSwitchContainer = styled.button<ThemeSwitchContainerProps>`
  display: flex;
  align-items: center;

  justify-content: ${({ themeMode }) =>
    themeMode === ThemeMode.DARK ? "flex-start" : "flex-end"};

  width: 2.8rem;
  height: 1.5rem;

  border-radius: 1.5rem;

  cursor: pointer;

  background: ${({ theme, themeMode }) =>
    themeMode === ThemeMode.DARK
      ? theme.colors.backgroundDisabled
      : theme.colors.backgroundSecondary};
  border: none;

  @media (max-width: 590px) {
    position: fixed;

    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    z-index: 2;

    width: 5rem;
    height: 3rem;
    font-size: 1.8rem;

    bottom: 3rem;
    left: 1rem;

    transition: opacity 200ms ease-in-out;
  }
`;

export const ThemeSwitchEmojiContainer = styled.div`
  padding: 4px;

  line-height: 0;
`;
