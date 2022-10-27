import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

interface ThemeSwitchContainerProps {
  themeMode: ThemeMode;
  isMenuOpen: boolean;
}

export const ThemeSwitchContainer = styled.button<ThemeSwitchContainerProps>`
  display: flex;
  align-items: center;

  width: 2.8rem;
  height: 1.5rem;

  border-radius: 1.5rem;

  cursor: pointer;
  position: relative;

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
    right: 2rem;

    transition: opacity 200ms ease-in-out;
  }
`;

interface ThemeSwitchEmojiContainerProps {
  themeMode: ThemeMode;
}

export const ThemeSwitchEmojiContainer = styled.div<ThemeSwitchEmojiContainerProps>`
  position: absolute;
  left: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "auto" : "0px")};
  right: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "0px" : "auto")};

  height: 100%;
  width: 50%;
`;

interface ThemeSwitchBulletProps {
  themeMode: ThemeMode;
}

export const ThemeSwitchBullet = styled.div<ThemeSwitchBulletProps>`
  width: 1rem;
  height: 1rem;

  border-radius: 1rem;

  position: absolute;
  left: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "4px" : "auto")};
  right: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "auto" : "4px")};

  background: ${({ theme }) => theme.colors.white};

  transition: left 200ms ease-in-out, right 200ms ease-in-out;

  @media (max-width: 590px) {
    width: 2rem;
    height: 2rem;
  }
`;
