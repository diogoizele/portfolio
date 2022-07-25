import { GoHomeButton, Section } from "components";

import styles from "./about.module.scss";

import ResumeButton from "./resumeButton/resumeButton";
import Details from "./details/details";
import Avatar from "./avatar/avatar";
import AboutMe from "./aboutMe/aboutMe";

const About = () => (
  <Section title="About me" to="#about" id="about">
    <div className={styles.about}>
      <div className={styles["about__content--left"]}>
        <Avatar />
        <Details />
        <ResumeButton />
      </div>
      <div className={styles["about__content--right"]}>
        <AboutMe />
        {/* <div className={styles.techs}>
          <p>React</p>
          <p>React Native</p>
          <p>Next.js</p>
          <p>Typescrips</p>
          <p>Node</p>
          <p>Java</p>
          <p>Spring Boot</p>
        </div> */}
      </div>
    </div>
    <GoHomeButton />
  </Section>
);

export default About;
