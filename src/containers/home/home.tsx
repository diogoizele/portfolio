import styles from "./home.module.scss";
import Image from "next/image";

import memojiImg from "../../assets/memoji-diogo-izele.webp";

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <p data-aos="fade-down" data-aos-duration="500" data-aos-mirror="true">
          <span className={`${styles["cian-detail"]} ${styles.grow}`}>
            Hello, my name is
          </span>
        </p>
        <h3
          data-aos="fade-right"
          data-aos-mirror="true"
          className={styles.name}
        >
          <span className={styles.grow}>Diogo Izele</span>
        </h3>
        <h2 className={styles.role} data-aos="fade-left" data-aos-mirror="true">
          I&apos;m a{" "}
          <span className={`${styles["cian-detail"]} ${styles.grow}`}>
            Web Developer.
          </span>
        </h2>
        <p data-aos="fade-up" data-aos-duration="900" data-aos-mirror="true">
          I develop creative apps and websites, building the{" "}
          <span className={`${styles["cian-detail"]} ${styles.grow}`}>
            Frontend
          </span>
          ,{" "}
          <span className={`${styles["cian-detail"]} ${styles.grow}`}>
            Backend
          </span>{" "}
          and{" "}
          <span className={`${styles["cian-detail"]} ${styles.grow}`}>
            Mobile apps.
          </span>
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
