import { useTranslation } from "react-i18next";
import { translateProduct } from "../../../../Cart/CartProducts/CartProduct";
import RateStars from "../../../MidComponents/RateStars/RateStars";
import ProductColors from "../../../MiniComponents/ProductColors/ProductColors";
import s from "./ProductCardInfo.module.scss";

const ProductCardInfo = ({ product, showColors, navigateToProductDetails }) => {
  const { shortName, price, discount, afterDiscount, rate, votes, colors } =
    product;
  const { t } = useTranslation();

  const translatedProductName = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "shortName",
  });

  return (
    <section className={s.productInfo}>
      <strong className={s.productName}>
        <a href="#" onClick={() => navigateToProductDetails()}>
          {translatedProductName}
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
