import Image from "next/image";

import styles from "./avatar.module.scss";

import profileImg from "../../../assets/profile-pic.webp";

const Avatar = () => {
  return (
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
        alt="Photo of Diogo Izele's face. Diogo has fair skin, dark blonde hair, blue eyes and wears rounded glasses."
      />
    </div>
  );
};

export default Avatar;
