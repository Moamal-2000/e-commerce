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
            <div className={s.colorText}></div>

            <div className={s.colors}>
              <div className={s.color}></div>
              <div className={s.color}></div>
            </div>
          </section>

          <section className={s.sizesSection}>
            <div className={s.sizeText}></div>

            <div className={s.sizes}>
              <div className={s.size}></div>
              <div className={s.size}></div>
              <div className={s.size}></div>
              <div className={s.size}></div>
              <div className={s.size}></div>
            </div>
          </section>

          <section className={s.options}>
            <div className={s.customInput}></div>
            <button className={s.buyNowButton}></button>
            <button className={s.favButton}></button>
          </section>
        </section>

        {/* <ProductFeatures /> */}
      </section>
    </section>
  );
};
export default SkeletonProductDetails;
