import { productsData } from "../../../Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import s from "./ThisMonthSection.module.scss";

const ThisMonthSection = () => {
  function filterThisMonthProducts() {
    const filteredProducts = productsData.filter(
      (productData) => productData.sold > 1000
    );

    return filteredProducts;
  }

  const productsCustomizations = {
    showDiscount: false,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: false,
    lazyLoading: true,
  };

  return (
    <section className={s.thisMonthSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName="This Month"
          sectionName="Best Selling Products"
        />

        <button type="button" className={s.viewAllBtn}>
          View All
        </button>
      </div>

      <ProductsSlider
        filterFun={filterThisMonthProducts}
        customization={productsCustomizations}
      />
    </section>
  );
};
export default ThisMonthSection;
