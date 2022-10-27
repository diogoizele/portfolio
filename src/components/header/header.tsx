import Link from "next/link";
import { useRouter } from "next/router";

import { HiMenu } from "react-icons/hi";

import miniProfilePic from "assets/images/mini-profile-pic.webp";

import {
  Container,
  PersonalInformation,
  PersonalName,
  NavList,
  NavItem,
  NavAnchor,
  HamburguerMenuButton,
  Nav,
  Avatar,
} from "./header.styles";
import { useState } from "react";
import { useThemeMode, useWindowSize } from "hooks";
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
      <Link href={href}>
        <NavAnchor href={href}>{children}</NavAnchor>
      </Link>
    </NavItem>
  );
};
export const Header = () => {
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(false);

  const { themeMode, onToggleThemeMode } = useThemeMode();
  const { width } = useWindowSize();
  const { asPath } = useRouter();

  const isMobileView = width && width <= 590;

  const handleOpenMobileMenu = () => {
    setMobileExpandedMenu((expanded) => !expanded);
  };

  const handleCloseMobileMenu = () => {
    console.log("clicou");
    setMobileExpandedMenu(false);
  };

  return (
    <Container>
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
  );
};
