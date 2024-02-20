import { redJoystick } from "../../../Assets/Images/Images";
import RateStars from "../RateStars";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { name, price, discount, afterDiscount, img, rate, votes, id } =
    product;

  return (
    <div className={styles.card}>
      <div className={styles.productImg}>
        <img src={redJoystick} />

        <div className={styles.layerContent}>
          <div className={styles.discount}>-{discount}%</div>

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
          <a href="#">{name}</a>
        </h3>
        <div className={styles.price}>
          ${afterDiscount}
          <s className={styles.afterDiscount}>${price}</s>
        </div>

        <div className={styles.rateContainer}>
          <div className={styles.stars}>
            <RateStars rate={rate} />
            </div>

          <span className={styles.numOfVotes}>({votes})</span>
        </div>
      </section>
    </div>
  );
};
export default ProductCard;
