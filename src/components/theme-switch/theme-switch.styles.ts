import styled from "styled-components";
import { ThemeMode } from "styles/theme.types";

interface ThemeSwitchProps {
  themeMode: ThemeMode;
}

interface ThemeSwitchContainerProps extends ThemeSwitchProps {
  isMenuOpen: boolean;
}

const MILISECONDS_ANIMATION_DURATION = 200;

export const ThemeSwitchContainer = styled.button<ThemeSwitchContainerProps>`
  display: flex;
  align-items: center;

  width: 45px;
  height: 22px;
  padding: 2px;

  border-radius: 1.5rem;

  cursor: pointer;
  position: relative;

  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border: none;

  @media (max-width: 590px) {
    position: fixed;

    transform: translateX(
      ${({ isMenuOpen }) => {
        return isMenuOpen ? "25%" : "200%";
      }}
    );
    z-index: 2;

    bottom: 2rem;
    right: 3rem;

    width: 56px;
    height: 24px;

    transition: transform ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;
  }
`;

export const ThemeSwitchEmojiContainer = styled.div<ThemeSwitchProps>`
  left: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "2px" : "auto")};
  right: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "auto" : "2px")};

  font-size: 16px;


  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;
`;

export const ThemeSwitchBullet = styled.div<ThemeSwitchProps>`
  width: 25px;
  height: 25px;

  border-radius: 100%;

  position: absolute;

  background: ${({ theme }) => theme.colors.white};

  left: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "auto" : "0")};
  right: ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "0" : "auto")};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;

  @media (max-width: 590px) {
    width: 32px;
    height: 32px;
  }
`;
