import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MainSlider.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MainSlider() {
  return (
    <Swiper
      className={styles.mainSlider}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className={styles.slide}>
        <img
          src={require("../../assets/images/introduction-product1.jpg")}
          alt="product preview"
        />
        <div className={styles.content}>
          <div className={styles.nameProduct}>
            <img
              src={require("../../assets/images/apple-logo.png")}
              alt="market logo"
            />
            <strong>Iphone 14 Series</strong>
          </div>

          <h2 className={styles.discount}>Up to 10% off Voucher</h2>

          <button type="button" className={styles.shopNow}>
            <a href="\#">Shop Now</a>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <img
          style={{ transform: "scale(1.2)", width: "300px" }}
          src={require("../../assets/images/introduction-product2.jpg")}
          alt="product preview"
        />
        <div className={styles.content}>
          <div className={styles.nameProduct}>
            <img
              src={require("../../assets/images/canon-logo.png")}
              alt="market logo"
            />
            <strong>Canon EOS 5D MkII</strong>
          </div>

          <h2 className={styles.discount}>Up to 30% off Voucher</h2>

          <button type="button" className={styles.shopNow}>
            <a href="\#">Shop Now</a>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <img
          src={require("../../assets/images/Introduction-product3.jpg")}
          alt="product preview"
        />
        <div className={styles.content}>
          <div className={styles.nameProduct}>
            <img
              src={require("../../assets/images/apple-logo.png")}
              alt="market logo"
            />
            <strong>MacBook Pro 16</strong>
          </div>

          <h2 className={styles.discount}>Up to 15% off Voucher</h2>

          <button type="button" className={styles.shopNow}>
            <a href="\#">Shop Now</a>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
