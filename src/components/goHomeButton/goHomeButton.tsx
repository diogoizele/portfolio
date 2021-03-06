import Link from "next/link";
import styles from "./goHomeButton.module.scss";

import { IoIosArrowUp } from "react-icons/io";

const GoHomeButton = () => (
  <Link href="#home">
    <div
      className={styles["go-home-btn"]}
      data-aos="slide-down"
      data-aos-offset="800"
      data-aos-duration="700"
    >
      <IoIosArrowUp />
    </div>
  </Link>
);

export default GoHomeButton;
