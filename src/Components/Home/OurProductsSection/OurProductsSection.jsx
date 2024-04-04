import { Link } from "react-router-dom";
import { productCardCustomizations } from "src/Data/staticData";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";

const OurProductsSection = () => {
  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName="Our Products"
          sectionName="Explore Our Products"
        />
      </div>

      <ExploreProducts
        numOfProducts={7}
        customization={productCardCustomizations.ourProducts}
      />

      <Link to="/products" className={s.viewProductsBtn}>
        View All Products
      </Link>
    </section>
  );
};
export default OurProductsSection;
