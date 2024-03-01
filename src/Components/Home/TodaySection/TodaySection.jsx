import { productsData } from "../../../Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import EventCounter from "./EventCounter";
import styles from "./TodaySection.module.scss";

const TodaySection = () => {
  const filterFlashSalesProducts = () =>
    productsData.filter((productData) => productData.sold > 100);

  return (
    <section className={styles.todaysSection}>
      <div className={styles.wrapper}>
        <SectionTitle eventName="Today's" sectionName="Flash Sales" />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider filterFun={filterFlashSalesProducts} />

      <button type="button" className={styles.viewProductsBtn}>
        View All Products
      </button>
    </section>
  );
};
export default TodaySection;
