import s from "./SkeletonProductFirstInfos.module.scss";

const SkeletonProductFirstInfos = () => {
  return (
    <section className={s.firstInfos}>
      <b className={s.productName} />

      <section className={s.rateAndReviews}>
        <div className={s.stars}>
          <div className={s.star} />
          <div className={s.star} />
          <div className={s.star} />
          <div className={s.star} />
          <div className={s.star} />
        </div>

        <span className={s.reviews} />
      </section>

      <span className={s.price} />

      <div className={s.description}>
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
    </section>
  );
};
export default SkeletonProductFirstInfos;
