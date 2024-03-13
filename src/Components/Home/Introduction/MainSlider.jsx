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
import s from "./MainSlider.module.scss";
import introductionSlides from "./IntroductionSlides";

function MainSlider() {
  return (
    <Swiper
      className={s.mainSlider}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {introductionSlides()}
    </Swiper>
  );
}

export default MainSlider;
