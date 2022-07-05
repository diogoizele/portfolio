import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import miniProfilePic from "assets/mini-profile-pic.webp";

const Header = () => {
  return (
    <header
      id="home"
      className={styles.header}
      data-aos="fade-down"
      data-aos-offset="20"
      data-aos-duration="300"
      data-aos-easing="ease-in-sine"
      data-aos-mirror="true"
    >
      <div>
        <Image
          src={miniProfilePic}
          alt="Diogo Izele's avatar"
          width={48}
          height={48}
          quality={80}
        />
        <h5>Diogo Izele</h5>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#works">
              <a>Works</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
