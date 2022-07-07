import Link from "next/link";
import type { NavLinkProps } from "./nav.types";
import styles from "./nav.module.scss";

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </ul>
  </nav>
);

export default Nav;
