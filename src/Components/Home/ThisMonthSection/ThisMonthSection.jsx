import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./ThisMonthSection.module.scss";

const ThisMonthSection = () => {
  const { t } = useTranslation();
  const thisMonthSection = "sectionTitles.thisMonthSection";

  return (
    <section className={s.thisMonthSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${thisMonthSection}.title`)}
          sectionName={t(`${thisMonthSection}.bestSelling`)}
        />

        <Link to="/products" className={s.viewAllBtn}>
          {t("buttons.viewAll")}
        </Link>
      </div>

      <ProductsSlider
        filterFun={filterThisMonthProducts}
        loading="lazy"
        skipToId="#poster-buy-now"
        skipLinkTitle="Skip best selling products section"
      />
    </section>
  );
};
export default ThisMonthSection;

function filterThisMonthProducts() {
  const filteredProducts = productsData.filter(
    (productData) => productData.sold > 1000
  );

  return filteredProducts;
}
