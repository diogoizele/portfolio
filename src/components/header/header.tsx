import { useRouter } from "next/router";
import { useScrollDirection } from "react-use-scroll-direction";

import { HiMenu } from "react-icons/hi";

import miniProfilePic from "assets/images/mini-profile-pic.webp";

import {
  Container,
  PersonalInformation,
  PersonalName,
  NavList,
  NavItem,
  NavLink as StyledNavLink,
  HamburguerMenuButton,
  Nav,
  Avatar,
  HeaderSubContainer,
  ContainerWrapper,
} from "./header.styles";
import { useEffect, useState } from "react";
import { useThemeMode, useWindow } from "hooks";
import { ThemeSwitch } from "..";

export type NavLinkProps = {
  href: string;
  children: string;
  isActive: boolean;

  onClick?: () => void;
};

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <NavItem isActive={isActive} onClick={onClick}>
      <StyledNavLink href={href}>{children}</StyledNavLink>
    </NavItem>
  );
};
export const Header = () => {
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(false);
  const [containerClassName, setContainerClassName] = useState("");

  const { themeMode, onToggleThemeMode } = useThemeMode();
  const { width, positionY } = useWindow();
  const { asPath } = useRouter();
  const { isScrolling, isScrollingDown, isScrollingUp } = useScrollDirection();

  const isMobileView = width && width <= 590;

  const handleOpenMobileMenu = () => {
    setMobileExpandedMenu((expanded) => !expanded);
  };

  const handleCloseMobileMenu = () => {
    setMobileExpandedMenu(false);
  };

  const handleScroll = () => {
    if (positionY < 10) {
      setContainerClassName("unhighlight-header");
    } else if (isScrolling && isScrollingDown) {
      setContainerClassName("on-bottom-scroll");
    } else if (isScrolling && isScrollingUp) {
      setContainerClassName("on-top-scroll highlight-header");
    }
  };

  useEffect(() => {
    if (isScrolling) {
      handleScroll();
    }
  }, [isScrolling, positionY]);

  useEffect(() => {
    if (positionY > 10) {
      setContainerClassName("on-top-scroll highlight-header");
    }
  }, [positionY]);

  return (
    <ContainerWrapper className={!isMobileView && containerClassName}>
      <Container>
        <HeaderSubContainer className={containerClassName}>
          <PersonalInformation>
            <Avatar
              src={miniProfilePic}
              alt="Diogo Izele's avatar"
              width={48}
              height={48}
              quality={90}
            />
            <PersonalName>Diogo Izele</PersonalName>
          </PersonalInformation>
          {isMobileView && (
            <HamburguerMenuButton
              title={mobileExpandedMenu ? "Close Menu" : "Open Menu"}
              isMenuOpen={mobileExpandedMenu}
              onClick={handleOpenMobileMenu}
            >
              <HiMenu size={36} />
            </HamburguerMenuButton>
          )}
        </HeaderSubContainer>

        <Nav>
          <NavList isMenuOpen={mobileExpandedMenu} mobileView={isMobileView}>
            <NavLink
              isActive={asPath === "/"}
              href="/"
              onClick={handleCloseMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              isActive={asPath === "/about"}
              href="/about"
              onClick={handleCloseMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              isActive={asPath === "/projects"}
              href="/projects"
              onClick={handleCloseMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              isActive={asPath === "/contact"}
              href="/contact"
              onClick={handleCloseMobileMenu}
            >
              Contact
            </NavLink>
          </NavList>

          <ThemeSwitch
            isMenuOpen={mobileExpandedMenu}
            onToggle={onToggleThemeMode}
            mode={themeMode}
          />
        </Nav>
      </Container>
    </ContainerWrapper>
  );
};
