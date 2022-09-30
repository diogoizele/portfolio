import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

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
    </div>
  );
};
