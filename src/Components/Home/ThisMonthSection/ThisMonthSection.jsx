import { productsData } from "../../../Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import styles from "./ThisMonthSection.module.scss";

const ThisMonthSection = () => {
  function filterThisMonthProducts() {
    const filteredProducts = productsData.filter(
      (productData) => productData.sold > 1000
    );

    return filteredProducts;
  }

  return (
    <section className={styles.thisMonthSection}>
      <div className={styles.wrapper}>
        <SectionTitle
          eventName="This Month"
          sectionName="Best Selling Products"
        />

        <button type="button" className={styles.viewAllBtn}>
          View All
        </button>
      </div>

      <ProductsSlider filterFun={filterThisMonthProducts} />
    </section>
  );
};
export default ThisMonthSection;
