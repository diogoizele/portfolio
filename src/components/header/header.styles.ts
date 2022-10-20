import styled from "styled-components";

const EXPANDED_MENU_TIME = 300;

export const Container = styled.header`
  height: 3rem;
  max-width: 1120px;
  width: calc(100% - 8rem);

  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;

  @media screen and (max-width: 590px) {
    height: auto;
    width: 100%;

    gap: 1rem;
    padding: 2rem;

    flex-direction: column;
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const PersonalName = styled.strong`
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
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

  gap: 1rem;

  @media screen and (max-width: 590px) {
    background: ${({ theme }) => theme.colors.primary};

    position: fixed;
    inset: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-top: 3rem;
    padding-left: 2rem;

    transition: transform ${EXPANDED_MENU_TIME}ms ease-in-out;

    transform: translateX(
      ${({ isMenuOpen, mobileView }) => {
        if (mobileView) {
          return isMenuOpen ? "0%" : "-100%";
        }

        return "-100%";
      }}
    );
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 590px) {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.backgroundDisabled};

    &:hover {
      color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
  } ;
`;

export const NavAnchor = styled.a`
  padding: 0.8rem 0.5rem;

  cursor: pointer;
`;

interface HamburguerMenuButtonProps {
  isMenuOpen: boolean;
}

export const HamburguerMenuButton = styled.button<HamburguerMenuButtonProps>`
  position: absolute;

  right: 1rem;
  top: 2rem;

  z-index: 3;

  height: 3.5rem;
  width: 3.5rem;

  border: none;
  background: none;

  transition: color 200ms ease-in-out;

  color: ${({ theme, isMenuOpen }) =>
    isMenuOpen ? theme.colors.backgroundPrimary : theme.colors.primary};
`;
