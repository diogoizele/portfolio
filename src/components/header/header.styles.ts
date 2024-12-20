import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { useThemeMode } from "hooks";
import { ThemeMode } from "styles/theme.types";
import * as colors from "styles/colors";

const EXPANDED_MENU_TIME = 300;
const MOVE_NAV_BAR = 400;

export const ContainerWrapper = styled.header`
  width: 100%;
  height: 6rem;

  z-index: 1;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &.on-bottom-scroll {
    transform: translateY(-100%);

    transition: transform ${MOVE_NAV_BAR}ms;
  }

  &.on-top-scroll {
    transform: translateY(auto);

    height: 4rem;
    transition: transform ${MOVE_NAV_BAR}ms;
  }

  &.highlight-header {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    box-shadow: 0 1px 4px
      ${({ theme }) => {
        const { themeMode } = useThemeMode();

        return themeMode === ThemeMode.DARK
          ? theme.colors.black
          : colors.gray.A400;
      }};
    transition: background-color box-shadow ${MOVE_NAV_BAR}ms;
  }

  &.unhighlight-header {
    background-color: transparent;
    transition: 300ms;
  }

  @media screen and (max-width: 590px) {
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;

  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 590px) {
    width: 100%;
    align-items: flex-start;

    padding: 0;

    flex-direction: row;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  box-sizing: content-box;

  background-color: ${colors.gray.A400};

  border-radius: 50%;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;

  transform: scale(0.96);

  transition: transform 200ms ease-in-out, padding 200ms ease-in-out;

  border: 0px;
  :hover {
    transform: scale(1.05);
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const HeaderSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  @media screen and (max-width: 590px) {
    width: 100%;

    height: 100%;
    padding: 0.5rem 2rem;

    justify-content: space-between;

    &.on-bottom-scroll {
      transform: translateY(-200%);

      transition: transform ${MOVE_NAV_BAR}ms;
    }

    &.on-top-scroll {
      transform: translateY(auto);

      height: 5rem;

      transition: transform ${MOVE_NAV_BAR}ms;
    }

    &.highlight-header {
      background-color: ${({ theme }) => theme.colors.backgroundPrimary};
      box-shadow: 0 0 3px
        ${({ theme }) => {
          const { themeMode } = useThemeMode();

          return themeMode === ThemeMode.DARK
            ? colors.gray.A900
            : theme.colors.textDisabled;
        }};
      transition: background-color box-shadow ${MOVE_NAV_BAR}ms;
    }

    &.unhighlight-header {
      background-color: transparent;
      height: 6rem;
      transition: 300ms;
    }
  }
`;

export const PersonalName = styled.strong`
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

interface NavListProps {
  isMenuOpen: boolean;
  mobileView: boolean;
}

export const NavList = styled.ul<NavListProps>`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  @media screen and (max-width: 590px) {
    background: ${({ theme }) => theme.colors.primary};

    &::after {
      content: "";
      position: absolute;

      top: 0rem;
      left: -25%;
      right: 100%;
      bottom: 0rem;

      z-index: 1;

      filter: blur(100px);
    }

    position: fixed;
    inset: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-top: 6rem;
    padding-left: 1rem;

    transition: transform ${EXPANDED_MENU_TIME}ms ease-in-out;

    transform: translateX(
      ${({ isMenuOpen, mobileView }) => {
        if (mobileView) {
          return isMenuOpen ? "25%" : "100%";
        }

        return "100%";
      }}
    );
  }
`;

interface NavItemProps {
  isActive: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  font-size: 1.1rem;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.textPrimary};

  transition: transform 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    transform: translateY(-2px);
  }

  @media screen and (max-width: 590px) {
    font-size: 1.5rem;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.backgroundPrimary};

    background: ${({ theme, isActive }) =>
      isActive ? theme.colors.backgroundPrimary : theme.colors.primary};

    width: 100%;
    border-radius: 8px;

    &:hover {
      color: ${({ theme }) => {
        const { themeMode } = useThemeMode();

        return themeMode === ThemeMode.DARK
          ? theme.colors.backgroundPrimary
          : theme.colors.white;
      }};
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem 0.8rem;

  width: 100%;
  display: flex;

  height: 100%;

  cursor: pointer;
`;

interface HamburguerMenuButtonProps {
  isMenuOpen: boolean;
}

export const HamburguerMenuButton = styled.button<HamburguerMenuButtonProps>`
  z-index: 3;

  height: 3.5rem;
  width: 3.5rem;

  border: none;
  background: none;

  transition: color 200ms ease-in-out;

  color: ${({ theme, isMenuOpen }) =>
    isMenuOpen ? theme.colors.backgroundPrimary : theme.colors.primary};
`;
