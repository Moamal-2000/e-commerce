import { redJoystick } from "../../../Assets/Images/Images";
import RateStars from "../MidComponents/RateStars";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { name, price, discount, afterDiscount, img, rate, votes, id } =
    product;

  return (
    <div className={styles.card}>
      <div className={styles.productImg}>
        <img src={redJoystick} alt={name} title={name} />

        <div className={styles.layerContent}>
          <div
            className={`${styles.discount} ${
              discount <= 0 ? styles.hide : ""
            }`}
          >
            -{discount}%
          </div>

          <div className={styles.icons}>
            <a href="#" className={styles.iconHolder} title="Add to favorite">
              <i className="fa-regular fa-heart"></i>
            </a>

            <a href="#" className={styles.iconHolder} title="See details">
              <i className="fa-regular fa-eye"></i>
            </a>
          </div>

          <button type="button" className={styles.addToCartBtn}>
            Add to cart
          </button>
        </div>
      </div>

      <section className={styles.productInfo}>
        <strong className={styles.productName}>
          <a href="#">{name}</a>
        </strong>
        <div className={styles.price}>
          ${afterDiscount}
          <del className={styles.afterDiscount}>${price}</del>
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
