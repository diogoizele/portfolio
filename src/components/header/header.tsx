import Image from "next/image";
import Link from "next/link";
import Nav from "components/nav/nav";
import miniProfilePic from "assets/mini-profile-pic.webp";
import styles from "./header.module.scss";

const Header = () => (
  <header
    id="home"
    className={styles.header}
    data-aos="fade-down"
    data-aos-offset="20"
    data-aos-duration="300"
    data-aos-easing="ease-in-sine"
    data-aos-mirror="true"
  >
    <div className={styles["header__info"]}>
      <Image
        src={miniProfilePic}
        alt="Diogo Izele's avatar"
        width={48}
        height={48}
        quality={80}
      />
      <strong className={styles["info__name"]}>Diogo Izele</strong>
    </div>
    <Nav />
  </header>
);

export default Header;
