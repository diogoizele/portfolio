import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <h2
        className={styles.hello}
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-mirror="true"
      >
        <span className={styles["cian-detail"]}>Hello, my name is</span>
      </h2>
      <h1 data-aos="fade-right" data-aos-duration="700" data-aos-mirror="true">
        <span>Diogo Izele</span>
      </h1>
      <h2
        className={styles.role}
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-mirror="true"
      >
        I’m a <span className={styles["cian-detail"]}>Web Developer.</span>
      </h2>
      <h3
        className={styles.description}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-mirror="true"
      >
        I develop creative apps and websites, building the{" "}
        <span className={styles["cian-detail"]}>Frontend</span>,{" "}
        <span className={styles["cian-detail"]}>Backend</span> and{" "}
        <span className={styles["cian-detail"]}>Mobile apps.</span>
      </h3>
    </section>
  );
};

export default Home;
