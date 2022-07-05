import Link from "next/link";

import SectionTitle from "components/sectionTitle/sectionTitle";

import styles from "./about.module.scss";

import ResumeButton from "./resumeButton/resumeButton";
import Details from "./details/details";
import Avatar from "./avatar/avatar";
import AboutMe from "./aboutMe/aboutMe";
import GoHomeButton from "components/goHomeButton/goHomeButton";

const About = () => {
  return (
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
      <GoHomeButton />
      <div className={styles["details-and-avatar"]}>
        <Avatar />
        <Details />
      </div>
      <ResumeButton />
      <AboutMe />
    </section>
  );
};

export default About;
