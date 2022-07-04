import styles from "./detailItem.module.scss";

const DetailItem = ({ label, children }) => {
  return (
    <li className={styles["detail-item"]}>
      <p>
        {label} <strong>{children}</strong>
      </p>
    </li>
  );
};

export default DetailItem;
