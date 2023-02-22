import styled from "styled-components";

interface ThemeSwitchContainerProps {
  isMenuOpen: boolean;
}

const MILISECONDS_ANIMATION_DURATION = 200;

export const ThemeSwitchContainer = styled.button<ThemeSwitchContainerProps>`
  display: flex;
  align-items: center;

  width: 44px;
  height: 20px;

  border-radius: 1.5rem;

  cursor: pointer;
  position: relative;

  background: ${({ theme }) => theme.colors.primary};
  border: none;

  @media (max-width: 590px) {
    position: fixed;

    transform: translateX(
      ${({ isMenuOpen }) => {
        return isMenuOpen ? "25%" : "200%";
      }}
    ) scale(1.2);
    z-index: 2;

    bottom: 2rem;
    right: 3rem;

    background: ${({ theme }) => theme.colors.backgroundTertiary};

    transition: transform ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;


  }
`;

export const ThemeSwitchEmojiContainer = styled.div`
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 4px;

  color: ${({ theme }) => theme.colors.backgroundSecondary};

  transform: ${({ theme }) =>
    theme.isDarkMode ? "translateX(0)" : "translateX(calc(100% + 8px))"};

  height: 100%;

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;

  @media (max-width: 590px) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ThemeSwitchBullet = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 100%;

  position: absolute;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) =>
    `0 0 2px ${
      theme.isDarkMode ? theme.colors.black : theme.colors.backgroundQuaternary
    }`};

  transform: ${({ theme }) =>
    !theme.isDarkMode ? "translateX(0)" : "translateX(calc(100% - 4px))"};

  transition: all ${MILISECONDS_ANIMATION_DURATION}ms ease-in-out;
`;
