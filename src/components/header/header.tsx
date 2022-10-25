import Image from "next/image";
import Link from "next/link";

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
} from "./header.styles";
import { useState } from "react";
import { useThemeMode, useWindowSize } from "hooks";
import { ThemeSwitch } from "..";

export type NavLinkProps = {
  href: string;
  children: string;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <NavItem>
      <Link href={href}>
        <NavAnchor>{children}</NavAnchor>
      </Link>
    </NavItem>
  );
};
export const Header = () => {
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(false);

  const { themeMode, onToggleThemeMode } = useThemeMode();
  const { width } = useWindowSize();
  const isMobileView = width && width <= 590;

  const handleOpenMobileMenu = () => {
    setMobileExpandedMenu((expanded) => !expanded);
  };

  return (
    <Container>
      <PersonalInformation>
        <Image
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
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
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
