import styles from "./home.module.scss";
import Image from "next/image";
import memojiImg from "../../assets/memoji-diogo-izele.webp";

import type { HoverEmphasisProps } from "./home.types";

const HoverEmphasis = ({ className, children }: HoverEmphasisProps) => (
  <em className={`${styles.emphasis} ${className}`}>{children}</em>
);

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <p data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true">
          <HoverEmphasis className={styles["cian-detail"]}>
            Hello, my name is
          </HoverEmphasis>
        </p>
        <h1
          data-aos="fade-right"
          data-aos-mirror="true"
          className={styles.name}
        >
          <HoverEmphasis>Diogo Izele</HoverEmphasis>
        </h1>
        <h2 className={styles.role} data-aos="fade-left" data-aos-mirror="true">
          I&apos;m a{" "}
          <HoverEmphasis className={styles["cian-detail"]}>
            Web Developer.
          </HoverEmphasis>
        </h2>
        <p data-aos="fade-up" data-aos-duration="900" data-aos-mirror="true">
          I develop creative apps and websites, building the{" "}
          <HoverEmphasis className={styles["cian-detail"]}>
            Frontend
          </HoverEmphasis>
          ,{" "}
          <HoverEmphasis className={styles["cian-detail"]}>Backend</HoverEmphasis>{" "}
          and{" "}
          <HoverEmphasis className={styles["cian-detail"]}>
            Mobile apps.
          </HoverEmphasis>
        </p>
      </div>
      <div
        className={styles.memoji}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-mirror="true"
      >
        <span className={styles.grow}>
          <Image
            src={memojiImg}
            quality={99}
            width={256}
            height={256}
            layout="fixed"
            alt="Memoji - Apple character emoji about Diogo Izele"
          />
        </span>
      </div>
    </section>
  );
};

export default Home;
