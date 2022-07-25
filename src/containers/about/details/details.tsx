import DetailItem from "./detailItem/detailItem";
import styles from "./details.module.scss";

const YEAR_OF_BIRTH = 2002;

const Details = () => {
  const myCurrentAge = new Date().getFullYear() - YEAR_OF_BIRTH;

  return (
    <ul
      className={styles.details}
      data-aos="fade-down"
      data-aos-duration="700"
      data-aos-mirror="true"
    >
      <DetailItem label="">Diogo Gabriel Izele</DetailItem>
      <DetailItem label="">
        <time dateTime="2002-03-23 00:00" title="March 23, 2002">
          {myCurrentAge} years
        </time>
      </DetailItem>
      <DetailItem label="">Brazil - RS</DetailItem>
    </ul>
  );
};

export default Details;
