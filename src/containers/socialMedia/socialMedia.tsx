import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

import styles from "./socialMedia.module.scss";

export const SocialMedia = () => {
  return (
    <div className={styles["social-medias"]}>
      <Link href="https://github.com/diogoizele">
        <a target="_blank">
          <FiGithub className={styles["social-media"]} size={28} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/diogoizele/">
        <a target="_blank">
          <FiLinkedin className={styles["social-media"]} size={28} />
        </a>
      </Link>
      <Link href="https://twitter.com/diogoizele">
        <a target="_blank">
          <FiTwitter className={styles["social-media"]} size={28} />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCQ-oyN6ClB9W6-Z773iii9Q">
        <a target="_blank">
          <FiYoutube className={styles["social-media"]} size={28} />
        </a>
      </Link>
    </div>
  );
};
