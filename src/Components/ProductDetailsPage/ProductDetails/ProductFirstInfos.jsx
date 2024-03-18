import RateStars from "../../Shared/MidComponents/RateStars";
import s from "./ProductFirstInfos.module.scss";

const ProductFirstInfos = ({ data }) => {
  const { name, price, votes, rate, description } = data;

  return (
    <section className={s.firstInfos}>
      <b className={s.productName}>{name.toUpperCase()}</b>

      <section className={s.rateAndReviews}>
        <RateStars rate={rate} />
        <span className={s.reviews}>({votes} Reviews)</span>
        <div className={s.verticalLine} />
        <span className={s.greenText}>In Stock</span>
      </section>

      <span className={s.price}>${price}</span>

      <p className={s.description}>{description}</p>
    </section>
  );
};
export default ProductFirstInfos;
