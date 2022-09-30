import styles from "./about.module.scss";

import ResumeButton from "./resumeButton/resumeButton";
import Details from "./details/details";
import Avatar from "./avatar/avatar";
import AboutMe from "./aboutMe/aboutMe";

export const About = () => (
  <div className={styles.about}>
    <div className={styles["about__content--left"]}>
      <Avatar />
      <Details />
      <ResumeButton />
    </div>
    <div className={styles["about__content--right"]}>
      <AboutMe />
    </div>
  </div>
);
