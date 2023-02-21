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

  width: 42px;
  height: 20px;
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

    width: 44px;

    transition: transform ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;
  }
`;

export const ThemeSwitchEmojiContainer = styled.div<ThemeSwitchProps>`
  left: ${({ themeMode }) =>
    themeMode === ThemeMode.DARK ? "2px" : "calc(100% - 18px)"};

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 0.9rem;

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;

  @media (max-width: 590px) {
    left: ${({ themeMode }) =>
      themeMode === ThemeMode.DARK ? "2px" : "calc(100% - 18px)"};
  }
`;

export const ThemeSwitchBullet = styled.div<ThemeSwitchProps>`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 1rem;

  position: absolute;

  background: ${({ theme }) => theme.colors.white};

  left: ${({ themeMode }) =>
    themeMode === ThemeMode.DARK ? "calc(100% - 1.5rem)" : "0"};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;

  @media (max-width: 590px) {
    left: ${({ themeMode }) =>
      themeMode === ThemeMode.DARK ? "calc(100% - 1.8rem)" : "0"};

    width: 1.8rem;
    height: 1.8rem;
  }
`;
