import RateStars from "../../MidComponents/RateStars";
import ProductColors from "../../MiniComponents/ProductColors";
import s from "./ProductCardInfo.module.scss";

const ProductCardInfo = ({ product, showColors, navigateToProductDetails }) => {
  const { name, price, discount, afterDiscount, rate, votes, colors } = product;

  return (
    <section className={s.productInfo}>
      <strong className={s.productName}>
        <a href="#" onClick={() => navigateToProductDetails()}>
          {name}
        </a>
      </strong>
      <div className={s.price}>
        ${afterDiscount}
        {discount > 0 && <del className={s.afterDiscount}>${price}</del>}
      </div>

      <div className={s.rateContainer}>
        <RateStars rate={rate} />

        <span className={s.numOfVotes}>({votes})</span>
      </div>

      {showColors && (
        <div className={s.colors}>
          <ProductColors colors={colors} />
        </div>
      )}
    </section>
  );
};
export default ProductCardInfo;
