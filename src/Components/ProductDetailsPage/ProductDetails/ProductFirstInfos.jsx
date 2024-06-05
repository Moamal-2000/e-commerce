import { useTranslation } from "react-i18next";
import RateStars from "../../Shared/MidComponents/RateStars/RateStars";
import s from "./ProductFirstInfos.module.scss";

const ProductFirstInfos = ({ data }) => {
  const { shortName, price, votes, rate } = data;
  const { t } = useTranslation();

  function translateProduct(key, uppercase, dynamicData = {}) {
    const shortNameKey = shortName.replaceAll(" ", "");
    const productTrans = `products.${shortNameKey}`;
    const translateText = t(`${productTrans}.${key}`, dynamicData);
    return uppercase ? translateText.toUpperCase() : translateText;
  }

  return (
    <section className={s.firstInfos}>
      <b className={s.productName} tabIndex="0">
        {translateProduct("name", true)}
      </b>

      <section className={s.rateAndReviews}>
        <RateStars rate={rate} />
        <span className={s.reviews} tabIndex="0">
          {t("detailsPage.reviews", { votes })}
        </span>

        <div className={s.verticalLine} />

        <span className={s.greenText} tabIndex="0">
          {t("detailsPage.inStock")}
        </span>
      </section>

      <span className={s.price} tabIndex="0">
        ${price}
      </span>

      <p className={s.description} tabIndex="0">
        {translateProduct("description")}
      </p>
    </section>
  );
};
export default ProductFirstInfos;
