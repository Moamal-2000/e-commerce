import { SwiperSlide } from "swiper/react";
import { introductionSliderData } from "../../../Data/staticData";
import styles from "./IntroductionSlide.module.scss";

const introductionSlides = () => {
  return introductionSliderData.map(
    ({ productName, productImg, logoImg, discountText, id }) => (
      <SwiperSlide className={styles.slide} key={id}>
        <img src={productImg} alt="product preview" />
        <div className={styles.content}>
          <div className={styles.nameProduct}>
            <img src={logoImg} alt="market logo" />
            <strong>{productName}</strong>
          </div>

          <h2 className={styles.discount}>{discountText}</h2>

          <button type="button" className={styles.shopNow}>
            <a href="\#">Shop Now</a>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </SwiperSlide>
    )
  );
};
export default introductionSlides;
