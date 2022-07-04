import styles from "./aboutMe.module.scss";

const AboutMe = () => {
  return (
    <div
      className={styles["about-me"]}
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-mirror="true"
    >
      <p>
        Hi, my job is to create cool stuff for the web. Since I was 13 years
        old, I really enjoy creating content for the internet, which has given
        me good design bases for editing images and videos. A little older, I
        became even more interested in computing, starting in 2019 the technical
        course in computing at IFSUL. I am currently studying Computer Science
        at Unisinos - POA.
      </p>
      <p>
        From the moment programming started to be part of my daily life, my main
        focus has been creating Frontends for web pages and apps, but I also
        have experience in creating mobile apps.
      </p>
      <p>
        Currently my goal is to become a full-stack developer specialized in all
        parts of the web development process, being able to work on all sides
        and with the main technologies used by the market.
      </p>
    </div>
  );
};

export default AboutMe;
