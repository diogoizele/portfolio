import SectionTitle from "components/sectionTitle/sectionTitle";
import Link from "next/link";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <SectionTitle
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="700"
        data-aos-mirror="true"
        component="h2"
        hasBefore
      >
        <Link href="#skills">Skills</Link>
      </SectionTitle>
    </section>
  );
};

export default Skills;
