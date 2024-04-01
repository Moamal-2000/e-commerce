import s from "./SkeletonProductFirstInfos.module.scss";

const SkeletonProductFirstInfos = () => {
  return (
    <section className={s.firstInfos}>
      <b className={s.productName}></b>

      <section className={s.rateAndReviews}>
        <div className={s.stars}>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
          <div className={s.star}></div>
        </div>

        <span className={s.reviews}></span>
      </section>

      <span className={s.price}></span>

      <div className={s.description}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </section>
  );
};
export default SkeletonProductFirstInfos;
