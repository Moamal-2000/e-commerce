import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import styles from "./OurProductsSection.module.scss";

const OurProductsSection = () => {
  const productsCustomizations = {
    showDiscount: false,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
  };

  return (
    <section className={styles.ourProductsSection}>
      <div className={styles.wrapper}>
        <SectionTitle
          eventName="Our Products"
          sectionName="Explore Our Products"
        />
      </div>

      <ExploreProducts
        numOfProducts={8}
        customization={productsCustomizations}
      />

      <button type="button" className={styles.viewProductsBtn}>
        View All Products
      </button>
    </section>
  );
};
export default OurProductsSection;
