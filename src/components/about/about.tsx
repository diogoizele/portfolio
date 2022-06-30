import Image from "../../../node_modules/next/image";
import styles from "./about.module.scss";

import profileImg from "../../assets/profile-pic.webp";

const About = () => {
  return (
    <section className={styles.about}>
      <h4>About</h4>
      <div>
        <Image
          src={profileImg}
          quality={100}
          alt="Foto do rosto de Diogo Izele. Diogo Izele tem a cor da pele clara, cabelos com uma tonalidade loira escura, olhos azuis e usa óculos arredondados"
        />
        <div>
          <p>
            Hi, my name is Diogo Gabriel Izele, I&apos;m 20 years old and my job is
            to create cool stuff for the web. Since 2015, I really enjoy
            creating content for the internet, which has given me good design
            bases for editing images and videos. A little older, I became even
            more interested in computing, starting in 2019 the technical course
            in computing at IFSUL. I am currently studying Computer Science at
            Unisinos - POA.
          </p>
          <p>
            Since programming started to be part of my daily life, my main focus
            has been creating Frontends for web pages and applications, but I
            also have experience with other aspects such as Backend and Mobile.
          </p>
          <p>
            Currently my goal is to become a full-stack developer, being an
            expert in all parts of the web development process, being able to
            work in all sides and with the main technologies used by the market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
