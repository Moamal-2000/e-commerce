import { useTranslation } from "react-i18next";
import { translateProduct } from "../../../Cart/CartProducts/CartProduct";
import RateStars from "../../../Shared/MidComponents/RateStars/RateStars";
import s from "./ProductFirstInfos.module.scss";

const ProductFirstInfos = ({ data }) => {
  const { shortName, price, votes, rate } = data;
  const { t } = useTranslation();

  const translatedProductName = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "name",
    uppercase: true,
  });

  const translatedDescription = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "description",
  });

  return (
    <section className={s.firstInfos}>
      <h2 className={s.productName}>{translatedProductName}</h2>

      <div className={s.rateAndReviews}>
        <RateStars rate={rate} />
        <span className={s.reviews}>{t("detailsPage.reviews", { votes })}</span>

        <div className={s.verticalLine} />

        <span className={s.greenText}>{t("detailsPage.inStock")}</span>
      </div>

      <span className={s.price} aria-label={`Price: $${price}`}>
        ${price}
      </span>

      <p className={s.description}>{translatedDescription}</p>
    </section>
  );
};
export default ProductFirstInfos;
