import Image from "next/image";

import miniProfilePic from "assets/images/mini-profile-pic.webp";
import styles from "./header.module.scss";
import { Nav } from "..";

export const Header = () => {
  return (
    <header id="home" className={styles.header}>
      <div className={styles["header__info"]}>
        <Image
          src={miniProfilePic}
          alt="Diogo Izele's avatar"
          width={48}
          height={48}
          quality={90}
        />
        <strong className={styles["info__name"]}>Diogo Izele</strong>
      </div>
      <Nav />
    </header>
  );
};
