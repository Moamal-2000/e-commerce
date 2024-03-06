import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ eventName, sectionName, type = 1 }) => {
  const type2Class = type === 2 ? styles.type2 : "";

  return (
    <div className={`${styles.sectionTitle} ${type2Class}`}>
      <div className={styles.event}>{eventName}</div>
      <b>{sectionName}</b>
    </div>
  );
};
export default SectionTitle;
