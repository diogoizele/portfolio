import Link from "next/link";
import Image from "next/image";

import { SectionTitle } from "components";
import { TOOLS_AND_TECHS } from "../../constants/";

import styles from "./toolsAndTechs.module.scss";

import type { ToolAndTechItemProps } from "./toolsAndTechs.types";

const ToolAndTechItem = ({ src, title }: ToolAndTechItemProps) => (
  <div className={styles["tools__item"]}>
    <Image width={64} height={64} src={src} alt={title} />
    <strong>{title}</strong>
  </div>
);

const ToolsAndTechs = () => (
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
        {TOOLS_AND_TECHS.map(({ src, title }) => (
          <ToolAndTechItem key={title} src={src} title={title} />
        ))}
      </div>
    </div>
  </section>
);

export default ToolsAndTechs;
