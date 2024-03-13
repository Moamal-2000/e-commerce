import RateStars from "../Shared/MidComponents/RateStars";
import styles from "./ProductFirstInfos.module.scss";

const ProductFirstInfos = ({data}) => {
  const {name, price, votes, rate} = data;

  return (
    <section className={styles.firstInfos}>
      <b className={styles.productName}>{name.toUpperCase()}</b>

      <section className={styles.rateAndReviews}>
        <RateStars rate={rate} />
        <span className={styles.reviews}>({votes} Reviews)</span>
        <div className={styles.verticalLine} />
        <span className={styles.greenText}>In Stock</span>
      </section>

      <span className={styles.price}>${price}</span>

      <p className={styles.description}>
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
    </section>
  );
};
export default ProductFirstInfos;
