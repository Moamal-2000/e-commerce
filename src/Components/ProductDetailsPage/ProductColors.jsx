import styles from "./ProductColors.module.scss";

const ProductColors = ({ data }) => {
  return (
    <section className={styles.colors}>
      <span>Colours:</span>
      <div
        className={`${styles.color} ${styles.active}`}
        style={{ backgroundColor: "#a0bce0" }}
      ></div>

      <div
        className={styles.color}
        style={{ backgroundColor: "#e07575" }}
      ></div>
    </section>
  );
};
export default ProductColors;
