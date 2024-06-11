import { useState } from "react";
import { DEFAULT_SWIPER_SPEED } from "src/Data/globalVariables";
import { isMobileScreenWidth } from "src/Functions/helper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper } from "swiper/react";
import IntroductionSlides from "./IntroductionSlides";
import s from "./MainSlider.module.scss";

function MainSlider() {
  const swiperModules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
  const [swiperSpeed, setSwiperSpeed] = useState(DEFAULT_SWIPER_SPEED);

  function handleTouchMove() {
    setSwiperSpeed(400);
  }

  function setDefaultSpeedOnTouchEnd() {
    setTimeout(() => setSwiperSpeed(DEFAULT_SWIPER_SPEED), 400);
  }

  return (
    <Swiper
      pagination={{ enabled: !isMobileScreenWidth(), clickable: true }}
      className={s.mainSlider}
      modules={swiperModules}
      spaceBetween={-1}
      slidesPerView={1}
      speed={swiperSpeed}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={setDefaultSpeedOnTouchEnd}
      dir="rtl"
    >
      {IntroductionSlides()}
    </Swiper>
  );
}

export default MainSlider;
