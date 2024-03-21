import { womenShopping } from "../../../Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () => {
  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2>Our Story</h2>

        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>

        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </section>

      <div className={s.imgHolder}>
        <img src={womenShopping} alt="two young women happy with shopping" />
      </div>
    </section>
  );
};
export default AboutHeroSection;
