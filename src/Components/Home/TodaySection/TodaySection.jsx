import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import EventCounter from "./EventCounter";
import ProductsSlider from "./ProductsSlider";
import styles from "./TodaySection.module.scss";

const TodaySection = () => {
  return (
    <section className={styles.todaysSection}>
      <div className={styles.wrapper}>
        <SectionTitle eventName="Today's" sectionName="Flash Sales" />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider />

      <button type="button" className={styles.viewProductsBtn}>
        View All Products
      </button>
    </section>
  );
};
export default TodaySection;
