import { Link } from "react-router-dom";
import { introductionSliderData } from "src/Data/staticData";
import { SwiperSlide } from "swiper/react";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./IntroductionSlides.module.scss";

const IntroductionSlides = () => {
  return introductionSliderData.map(
    ({ productName, productImg, logoImg, discountText, id }) => {
      return (
        <SwiperSlide className={s.slide} key={id}>
          <img src={productImg} alt="product preview" />
          <div className={s.content}>
            <div className={s.nameProduct}>
              <img src={logoImg} alt="market logo" />
              <strong>{productName}</strong>
            </div>

            <h2 className={s.discount}>{discountText}</h2>

            <Link to="/products" className={s.shopNow}>
              <span>Shop Now</span>
              <SvgIcon name="arrowRightLong" />
            </Link>
          </div>
        </SwiperSlide>
      );
    }
  );
};
export default IntroductionSlides;
