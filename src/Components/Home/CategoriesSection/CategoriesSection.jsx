import { useTranslation } from "react-i18next";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./CategoriesSection.module.scss";
import CategoriesSlider from "./CategoriesSlider";

const CategoriesSection = () => {
  const { t } = useTranslation();
  const categoriesSection = "sectionTitles.categoriesSection";

  return (
    <section className={s.categoriesSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${categoriesSection}.title`)}
          sectionName={t(`${categoriesSection}.browseByCategory`)}
        />
      </div>

      <CategoriesSlider />
    </section>
  );
};
export default CategoriesSection;
