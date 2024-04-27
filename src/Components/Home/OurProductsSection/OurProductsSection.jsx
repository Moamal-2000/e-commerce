import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productCardCustomizations } from "src/Data/staticData";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";

const OurProductsSection = () => {
  const { t } = useTranslation();
  const ourProducts = "sectionTitles.ourProducts";

  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${ourProducts}.title`)}
          sectionName={t(`${ourProducts}.exploreProducts`)}
        />
      </div>

      <ExploreProducts
        numOfProducts={7}
        customization={productCardCustomizations.ourProducts}
      />

      <Link to="/products" className={s.viewProductsBtn}>
        {t("buttons.viewAllProducts")}
      </Link>
    </section>
  );
};
export default OurProductsSection;
