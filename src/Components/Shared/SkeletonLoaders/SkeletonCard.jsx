import s from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={s.skeletonCard}>
      <div className={s.imgHolder}></div>

      <div className={s.productInfo}>
        <div className={s.title}></div>
        <div className={s.priceContainer}>
          <div className={s.price}></div>
          <div className={s.afterDiscount}></div>
        </div>
        <div className={s.rate}>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
