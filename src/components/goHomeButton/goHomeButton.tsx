import Link from "next/link";
import styles from "./goHomeButton.module.scss";

import { IoIosArrowUp } from "react-icons/io";

const GoHomeButton = () => {
  return (
    <Link href="#home">
      <div
        className={styles["go-home-btn"]}
        data-aos="slide-down"
        data-aos-offset="800"
        data-aos-duration="700"
      >
        <a>
          <IoIosArrowUp />
        </a>
      </div>
    </Link>
  );
};

export default GoHomeButton;
