import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ eventName, sectionName }) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.event}>{eventName}</div>
      <h3>{sectionName}</h3>
    </div>
  );
};
export default SectionTitle;
