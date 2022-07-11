import Link from "next/link";

import { SectionTitle, GoHomeButton } from "components";

import styles from "./about.module.scss";

import ResumeButton from "./resumeButton/resumeButton";
import Details from "./details/details";
import Avatar from "./avatar/avatar";
import AboutMe from "./aboutMe/aboutMe";

const About = () => (
  <section id="about" className={styles.about}>
    <SectionTitle
      data-aos="fade-right"
      data-aos-offset="-200"
      data-aos-duration="700"
      data-aos-mirror="true"
      component="h2"
      hasBefore
    >
      <Link href="#about">About Me</Link>
    </SectionTitle>
    <div className={styles["about__content"]}>
      <div className={styles.content}>
        <Avatar />
        <Details />
      </div>
      <div className={styles.content}>
        <AboutMe />
        <ResumeButton />
      </div>
    </div>
    <GoHomeButton />
  </section>
);

export default About;
