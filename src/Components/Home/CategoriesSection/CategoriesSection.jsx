import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import s from "./CategoriesSection.module.scss";
import CategoriesSlider from "./CategoriesSlider";

const CategoriesSection = () => {
  return (
    <section className={s.categoriesSection}>
      <div className={s.wrapper}>
        <SectionTitle eventName="Categories" sectionName="Browse By Category" />
      </div>

      <CategoriesSlider />
    </section>
  );
};
export default CategoriesSection;
