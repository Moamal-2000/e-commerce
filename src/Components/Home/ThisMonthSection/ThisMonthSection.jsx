import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./ThisMonthSection.module.scss";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";

const ThisMonthSection = () => {
  function filterThisMonthProducts() {
    const filteredProducts = productsData.filter(
      (productData) => productData.sold > 1000
    );

    return filteredProducts;
  }

  return (
    <section className={s.thisMonthSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName="This Month"
          sectionName="Best Selling Products"
        />

        <Link to="/products" className={s.viewAllBtn}>
          View All
        </Link>
      </div>

      <ProductsSlider filterFun={filterThisMonthProducts} />
    </section>
  );
};
export default ThisMonthSection;
