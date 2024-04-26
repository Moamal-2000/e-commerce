import { useTranslation } from "react-i18next";
import RateStars from "../../MidComponents/RateStars/RateStars";
import ProductColors from "../../MiniComponents/ProductColors/ProductColors";
import s from "./ProductCardInfo.module.scss";

const ProductCardInfo = ({ product, showColors, navigateToProductDetails }) => {
  const { shortName, price, discount, afterDiscount, rate, votes, colors } =
    product;
  const { t } = useTranslation();

  function translateProduct(key, uppercase, dynamicData = {}) {
    const shortNameKey = shortName.replaceAll(" ", "");
    const productTrans = `products.${shortNameKey}`;
    const translateText = t(`${productTrans}.${key}`, dynamicData);
    return uppercase ? translateText.toUpperCase() : translateText;
  }

  return (
    <section className={s.productInfo}>
      <strong className={s.productName}>
        <a href="#" onClick={() => navigateToProductDetails()}>
          {translateProduct("shortName")}
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
