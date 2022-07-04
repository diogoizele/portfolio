import { HiOutlineDocumentDownload } from "react-icons/hi";
import styles from "./resumeButton.module.scss";

const ResumeButton = () => {
  return (
    <div
      className={styles["button-container"]}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="false"
    >
      <a
        href="https://github.com/diogoizele/DIOGO-IZELE-RESUME/raw/master/DIOGO-IZELE-RESUME.pdf"
        download="DIOGO-IZELE-CURRICULUM"
      >
        <span className={styles["button-icon"]}>
          <HiOutlineDocumentDownload size={20} />
        </span>
        <span className={styles["button-content"]}>Download Resume</span>
      </a>
    </div>
  );
};

export default ResumeButton;
