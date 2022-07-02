import Image from "next/image";
import styles from "./about.module.scss";

import { HiOutlineDocumentDownload } from "react-icons/hi";

import profileImg from "../../assets/profile-pic.webp";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <h4
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-duration="700"
          data-aos-mirror="true"
        >
          <Link href="#about">About</Link>
        </h4>
        <div>
          <div
            className={styles["profile-pic-container"]}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-mirror="true"
          >
            <Image
              layout="fill"
              src={profileImg}
              quality={100}
              width={256}
              height={256}
              alt="Foto do rosto de Diogo Izele. Diogo Izele tem a cor da pele clara, cabelos loiro escuro, olhos azuis e usa óculos arredondados"
            />
          </div>
          <div
            className={styles["about-me"]}
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-mirror="true"
          >
            <p>
              Hi, my name is Diogo Gabriel Izele, I&apos;m 20 years old and my
              job is to create cool stuff for the web. Since 2015, I really
              enjoy creating content for the internet, which has given me good
              design bases for editing images and videos. A little older, I
              became even more interested in computing, starting in 2019 the
              technical course in computing at IFSUL. I am currently studying
              Computer Science at Unisinos - POA.
            </p>
            <p>
              Since programming started to be part of my daily life, my main
              focus has been creating Frontends for web pages and applications,
              but I also have experience with other aspects such as Backend and
              Mobile.
            </p>
            <p>
              Currently my goal is to become a full-stack developer, being an
              expert in all parts of the web development process, being able to
              work in all sides and with the main technologies used by the
              market.
            </p>
          </div>
        </div>
        <button
          className={styles["download-cv"]}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-offset="400"
        >
          <span className={styles["button-icon"]}>
            <HiOutlineDocumentDownload size={20} />
          </span>
          <span className={styles["button-content"]}>Download Resume</span>
        </button>
      </section>
    </>
  );
};

export default About;
