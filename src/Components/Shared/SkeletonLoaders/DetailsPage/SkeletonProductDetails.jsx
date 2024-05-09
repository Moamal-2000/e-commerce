import s from "./SkeletonProductDetails.module.scss";
import SkeletonProductFirstInfos from "./SkeletonProductFirstInfos";
import SkeletonProductPreview from "./SkeletonProductPreview";

const SkeletonProductDetails = () => {
  return (
    <section className={s.skeletonDetailsSection}>
      <SkeletonProductPreview />

      <section className={s.details}>
        <SkeletonProductFirstInfos />

        <section className={s.productOptions}>
          <section className={s.colorsSection}>
            <div className={s.colorText} />

            <div className={s.colors}>
              <div className={s.color} />
              <div className={s.color} />
            </div>
          </section>

          <section className={s.sizesSection}>
            <div className={s.sizeText} />

            <div className={s.sizes}>
              <div className={s.size} />
              <div className={s.size} />
              <div className={s.size} />
              <div className={s.size} />
              <div className={s.size} />
            </div>
          </section>

          <section className={s.options}>
            <div className={s.customInput} />
            <button className={s.buyNowButton} />
            <button className={s.favButton} />
          </section>
        </section>
      </section>
    </section>
  );
};
export default SkeletonProductDetails;
