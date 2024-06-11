import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { introductionSliderData } from "src/Data/staticData";
import { SwiperSlide } from "swiper/react";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./IntroductionSlides.module.scss";

const IntroductionSlides = () => {
  const { t } = useTranslation();

  return introductionSliderData.map(
    ({ productName, productImg, logoImg, id }) => {
      return (
        <SwiperSlide dir="ltr" className={s.slide} key={id}>
          <img src={productImg} alt="product preview" />
          <div className={s.content}>
            <div className={s.nameProduct}>
              <img src={logoImg} alt="market logo" />
              <strong>{productName}</strong>
            </div>

            <h2 className={s.discount}>{t("homeSlider.title")}</h2>

            <Link to="/products" className={s.shopNow} tabIndex="-1">
              <span>{t("buttons.buyNow")}</span>

              <div className={s.arrow}>
                <SvgIcon name="arrowRightLong" />
              </div>
            </Link>
          </div>
        </SwiperSlide>
      );
    }
  );
};
export default IntroductionSlides;
