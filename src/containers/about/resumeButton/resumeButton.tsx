import { HiOutlineDocumentDownload } from "react-icons/hi";

import styles from "./resumeButton.module.scss";

const ResumeButton = () => (
  <div
    className={styles["button-container"]}
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-once="false"
    data-aos-offset="-100"
  >
    <a
      href="https://github.com/diogoizele/DIOGO-IZELE-RESUME/raw/master/DIOGO-IZELE-RESUME.pdf"
      download="DIOGO-IZELE-CURRICULUM"
    >
      <span className={styles["button-icon"]}>
        <HiOutlineDocumentDownload
          size={20}
          title="Download Diogo Izele's Resume PDF"
        />
      </span>
      <span className={styles["button-content"]}>Download Resume</span>
    </a>
  </div>
);

export default ResumeButton;
