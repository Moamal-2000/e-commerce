import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./ProductFeatures.module.scss";

const ProductFeatures = () => {
  return (
    <section className={s.features}>
      <div className={s.feature}>
        <SvgIcon name="truck" />

        <div className={s.content}>
          <b>Free Delivery</b>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>

      <div className={s.feature}>
        <SvgIcon name="infiniteArrows" />

        <div className={s.content}>
          <b>Return Delivery</b>
          <p>Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </section>
  );
};
export default ProductFeatures;
