import Link from "next/link";

import styles from "./about.module.scss";

import ResumeButton from "containers/about/resumeButton/resumeButton";
import Details from "./details/details";
import Avatar from "./avatar/avatar";
import AboutMe from "./aboutMe/aboutMe";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h4
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-duration="700"
        data-aos-mirror="true"
      >
        <Link href="#about">About</Link>
      </h4>
      <div>
        <div className={styles["details-and-avatar"]}>
          <Avatar />
          <Details />
        </div>
        <ResumeButton />
        <AboutMe />
      </div>
    </section>
  );
};

export default About;
