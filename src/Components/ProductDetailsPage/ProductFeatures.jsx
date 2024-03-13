import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./ProductFeatures.module.scss";
const ProductFeatures = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <SvgIcon name="truck" />

        <div className={styles.content}>
          <b>Free Delivery</b>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>

      <div className={styles.feature}>
        <SvgIcon name="infiniteArrows" />

        <div className={styles.content}>
          <b>Return Delivery</b>
          <p>Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </section>
  );
};
export default ProductFeatures;
