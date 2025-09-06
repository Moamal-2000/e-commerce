import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import EventCounter from "./EventCounter";
import s from "./TodaySection.module.scss";

const TodaySection = () => {
  const todaysSection = "sectionTitles.todaysSection";
  const { t } = useTranslation();

  return (
    <section className={s.todaysSection} id="todays-section">
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${todaysSection}.title`)}
          sectionName={t(`${todaysSection}.flashSales`)}
        />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider
        filterFun={filterFlashSalesProducts}
        loading="lazy"
        skipToId="#view-all-today's-products"
        skipLinkTitle="Skip flash sales products section"
      />

      <Link
        to="/products"
        className={s.viewProductsBtn}
        id="view-all-today's-products"
      >
        {t("buttons.viewAllProducts")}
      </Link>
    </section>
  );
};
export default TodaySection;

function filterFlashSalesProducts() {
  return productsData.filter((productData) => productData.sold > 100);
}
