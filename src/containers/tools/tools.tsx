import Link from "next/link";
import Image from "next/image";

import SectionTitle from "components/sectionTitle/sectionTitle";

import styles from "./tools.module.scss";

import type { ToolItemProps } from "./tools.types";
import { TOOLS } from "constants/tools/tools";

const ToolItem = ({ src, title }: ToolItemProps) => (
  <div className={styles["tools__item"]}>
    <Image width={116} height={116} src={src} alt={title} />
    <strong>{title}</strong>
  </div>
);

const Tools = () => (
  <section className={styles.tools} id="tools">
    <SectionTitle
      data-aos="fade-right"
      data-aos-offset="-200"
      data-aos-duration="700"
      data-aos-mirror="true"
      component="h2"
      hasBefore
    >
      <Link href="#tools">Tools</Link>
    </SectionTitle>
    <div className={styles["tools__list"]}>
      <div className={styles.slider}>
        {TOOLS.map(({ src, title }) => (
          <ToolItem key={title} src={src} title={title} />
        ))}
      </div>
    </div>
  </section>
);

export default Tools;
