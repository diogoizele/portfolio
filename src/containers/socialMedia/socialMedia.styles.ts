import styled from "styled-components";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";

export const Container = styled.div`
  position: fixed;
  left: 1rem;

  padding: 1rem;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.textDisabled},
    inset 0 0 2px ${({ theme }) => theme.colors.textDisabled};

  background: ${() => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? "rgba(255, 255, 255, 0.10)"
      : "rgba(50, 50, 50, 0.10)";
  }};

  border-radius: 16px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 590px) {
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;

    gap: 2rem;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    box-shadow: none;
    background: transparent;
  }
`;

export const SocialMediaAnchor = styled.a`
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  box-sizing: content-box;

  transition: transform 180ms ease-in-out;

  &:hover {
    transform: translateX(4px);
  }
`;
