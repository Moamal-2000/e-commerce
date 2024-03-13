import styles from "./ProductSizes.module.scss";

const ProductSizes = () => {
  return (
    <section className={styles.sizes}>
      <span>Size:</span>

      <div className={styles.sizesWrapper}>
        <div className={styles.size}>XL</div>
        <div className={styles.size}>S</div>
        <div className={`${styles.size} ${styles.active}`}>M</div>
        <div className={styles.size}>L</div>
        <div className={styles.size}>XL</div>
      </div>
    </section>
  );
};
export default ProductSizes;
