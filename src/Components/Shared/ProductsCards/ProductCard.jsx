import { testImg } from "../../../assets/images/Images";
import { RateStars } from "../../../functions/globalFunctions";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ productData }) => {
  return (
    <div className={styles.card}>
      <div className={styles.productImg}>
        <img src={testImg} />

        <div className={styles.layerContent}>
          <div className={styles.discount}>-40</div>

          <div className={styles.icons}>
            <a href="#" className={styles.iconHolder}>
              <i className="fa-regular fa-heart"></i>
            </a>

            <a href="#" className={styles.iconHolder}>
              <i className="fa-regular fa-eye"></i>
            </a>
          </div>

          <button type="button" className={styles.addToCartBtn}>
            Add to cart
          </button>
        </div>
      </div>

      <section className={styles.productInfo}>
        <h3 className={styles.productName}>
          <a href="#">HAVIT HV-G92 Gamepad</a>
        </h3>
        <div className={styles.price}>
          $120
          <s className={styles.afterDiscount}>$150</s>
        </div>

        <div className={styles.rateContainer}>
          <div className={styles.stars}>
            <RateStars rate={2} />
          </div>

          <span className={styles.numOfVotes}>(88)</span>
        </div>
      </section>
    </div>
  );
};
export default ProductCard;
