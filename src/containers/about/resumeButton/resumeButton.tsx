import { HiOutlineDocumentDownload } from "react-icons/hi";
import styles from "./resumeButton.module.scss";

const ResumeButton = () => {
  return (
    <div
      className={styles["button-container"]}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="false"
      // data-aos-offset="200"
    >
      <button>
        <span className={styles["button-icon"]}>
          <HiOutlineDocumentDownload size={20} />
        </span>
        <span className={styles["button-content"]}>Download Resume</span>
      </button>
    </div>
  );
};

export default ResumeButton;
