import styles from "./sectionTitle.module.scss";

import type { SectionTitleProps } from "./sectionTitle.types";

const SectionTitle = ({
  children,
  component = "h1",
  hasBefore,
  ...dataAosProps
}: SectionTitleProps) => {
  const titleClass = `${styles.title} ${hasBefore ? styles.hasBefore : ""}`;
  const dataAosConfig = {
    "data-aos": dataAosProps["data-aos"],
    "data-aos-offset": dataAosProps["data-aos-offset"],
    "data-aos-duration": dataAosProps["data-aos-duration"],
    "data-aos-mirror": dataAosProps["data-aos-mirror"],
  };

  console.log(titleClass);

  const COMPONENT_TYPE = {
    h1: (
      <h1 className={titleClass} {...dataAosConfig}>
        {children}
      </h1>
    ),
    h2: (
      <h2 className={titleClass} {...dataAosConfig}>
        {children}
      </h2>
    ),
    h3: (
      <h3 className={titleClass} {...dataAosConfig}>
        {children}
      </h3>
    ),
    h4: (
      <h4 className={titleClass} {...dataAosConfig}>
        {children}
      </h4>
    ),
    h5: (
      <h5 className={titleClass} {...dataAosConfig}>
        {children}
      </h5>
    ),
    h6: (
      <h5 className={titleClass} {...dataAosConfig}>
        {children}
      </h5>
    ),
  };

  return COMPONENT_TYPE[component];
};

export default SectionTitle;
