import styles from "./Feature.module.scss";

const Feature = ({ iconImg, iconAlt, title, description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.iconHolder}>
        <img src={iconImg} alt={iconAlt} />
      </div>

      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};
export default Feature;
