import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import styles from "./CategoriesSection.module.scss";
import CategoriesSlider from "./CategoriesSlider";

const CategoriesSection = () => {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.wrapper}>
        <SectionTitle eventName="Categories" sectionName="Browse By Category" />
      </div>

      <CategoriesSlider />
    </section>
  );
};
export default CategoriesSection;
