import styles from "./section.module.scss";

import { SectionTitle } from "..";
import Link from "next/link";

import type { SectionProps } from "./section.types";

const SectionTitleLink = ({
  to,
  title,
}: Pick<SectionProps, "title" | "to">) => {
  if (to && title) {
    return <Link href={to}>{title}</Link>;
  }

  return <>{title}</>;
};

const Section = ({ title, children, to, id }: SectionProps) => {
  return (
    <section className={styles.section} id={id}>
      <SectionTitle
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-offset="-200"
        data-aos-mirror="true"
        component="h2"
        hasBefore
      >
        <SectionTitleLink title={title} to={to} />
      </SectionTitle>
      <div className={styles["section__content"]}>
        {children}
        <span className={styles["section__span"]}>Diogo Izele</span>
      </div>
    </section>
  );
};

export default Section;
