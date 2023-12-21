import SectionTitle from "../../Shared/SectionTitle";
import EventCounter from "./EventCounter";
import ProductsSlider from "./ProductsSlider";
import styles from "./TodaySection.module.scss"

const TodaySection = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <SectionTitle eventName="Today's" sectionName="Flash Sales" />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider />
    </div>
  );
};
export default TodaySection;
