import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ eventName, sectionName }) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.event}>{eventName}</div>
      <b>{sectionName}</b>
    </div>
  );
};
export default SectionTitle;
