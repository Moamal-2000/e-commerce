import { womenShopping } from "src/Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () => {
  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2 tabIndex="0">Our Story</h2>

        <p tabIndex="0">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive
          has 10,500 sellers and 300 brands and serves 3 million customers
          across the region.
        </p>

        <p tabIndex="0">
          Exclusive has more than 1 Million products to offer, growing very
          fast. Exclusive offers a diverse assortment in categories ranging from
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
