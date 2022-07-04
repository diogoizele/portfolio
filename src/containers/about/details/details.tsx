import DetailItem from "./detailItem/detailItem";
import styles from "./details.module.scss";

const YEAR_OF_BIRTH = 2002;

const Details = () => {
  const myCurrentAge = new Date().getFullYear() - YEAR_OF_BIRTH;

  return (
    <div className={styles.details}>
      <ul>
        <DetailItem label="name">Diogo Gabriel Izele</DetailItem>
        <DetailItem label="age">
          <time dateTime="2002-03-23 00:00" title="March 23, 2002">
            {myCurrentAge} years
          </time>
        </DetailItem>
        <DetailItem label="location">Brazil - RS</DetailItem>
      </ul>
    </div>
  );
};

export default Details;
