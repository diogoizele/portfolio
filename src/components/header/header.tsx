import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useScrollDirection } from "react-use-scroll-direction";

import { HiMenu } from "react-icons/hi";

import { useApp, useThemeMode, useWindow } from "hooks";
import { ThemeSwitch } from "components";

import miniProfilePic from "assets/images/mini-profile-pic-3.webp";

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
  AvatarContainer,
} from "./header.styles";

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
  const { strings } = useApp();

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
    if (positionY > 10) {
      setContainerClassName("on-top-scroll highlight-header");
    }
  }, [positionY]);

  useEffect(() => {
    if (isScrolling) {
      handleScroll();
    }
  }, [isScrolling, positionY]);

  useEffect(() => {
    console.log(strings);
  }, [strings]);

  return (
    <ContainerWrapper className={!isMobileView && containerClassName}>
      <Container>
        <HeaderSubContainer className={containerClassName}>
          <PersonalInformation>
            <AvatarContainer>
              <Avatar
                src={miniProfilePic}
                alt="Diogo Izele's avatar"
                width={48}
                height={48}
                quality={90}
              />
            </AvatarContainer>
            <PersonalName>Diogo Izele</PersonalName>
          </PersonalInformation>
          {isMobileView && (
            <HamburguerMenuButton
              title={
                mobileExpandedMenu
                  ? strings.header.mobile.view.close
                  : strings.header.mobile.view.open
              }
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
              {strings.header.home}
            </NavLink>
            <NavLink
              isActive={asPath === "/about"}
              href="/about"
              onClick={handleCloseMobileMenu}
            >
              {strings.header.about}
            </NavLink>
            <NavLink
              isActive={false}
              href="https://blog.diogoizele.com"
              onClick={handleCloseMobileMenu}
            >
              {strings.header.blog}
            </NavLink>
            <NavLink
              isActive={asPath === "/contact"}
              href="/contact"
              onClick={handleCloseMobileMenu}
            >
              {strings.header.contact}
            </NavLink>
          </NavList>

          <ThemeSwitch
            isMenuOpen={mobileExpandedMenu}
            onToggle={onToggleThemeMode}
            mode={themeMode}
          />

          {/* <LangSwitch isMenuOpen={mobileExpandedMenu} /> */}
        </Nav>
      </Container>
    </ContainerWrapper>
  );
};
