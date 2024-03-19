import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";

const OurProductsSection = () => {
  const productsCustomizations = {
    showDiscount: false,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    lazyLoading: true,
  };

  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName="Our Products"
          sectionName="Explore Our Products"
        />
      </div>

      <ExploreProducts
        numOfProducts={8}
        customization={productsCustomizations}
      />

      <button type="button" className={s.viewProductsBtn}>
        View All Products
      </button>
    </section>
  );
};
export default OurProductsSection;
