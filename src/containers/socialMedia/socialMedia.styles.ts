import styled from "styled-components";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";
import Link from "next/link";

export const Container = styled.div`
  position: fixed;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);

  padding: 1rem;
  box-shadow: 0 0 2px
    ${({ theme }) => {
      const { themeMode } = useThemeMode();

      return themeMode === ThemeMode.DARK
        ? theme.colors.backgroundPrimary
        : theme.colors.backgroundQuaternary;
    }};

  background: ${() => {
    const { themeMode } = useThemeMode();

    return themeMode === ThemeMode.DARK
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(50, 50, 50, 0.05)";
  }};
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (max-width: 760px) {
    left: 0;
    bottom: 0;
    top: unset;
    transform: unset;

    border-radius: unset;

    width: 100%;
    padding: 1rem 6rem;
    gap: 2.3rem;
  
    flex-direction: row;
    justify-content: center;
    align-items: center;

    box-shadow: none;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;

export const SocialMediaAnchor = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  box-sizing: content-box;

  transition: transform 180ms ease-in-out;

  &:hover {
    transform: translateX(2px) scale(1.1);
  }

  @media screen and (max-width: 740px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;
