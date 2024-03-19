import { productsData } from "../../../Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import EventCounter from "./EventCounter";
import s from "./TodaySection.module.scss";

const TodaySection = () => {
  const filterFlashSalesProducts = () =>
    productsData.filter((productData) => productData.sold > 100);
  const todaysProductsCustomization = {
    stopHover: false,
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: false,
    lazyLoading: true,
  };

  return (
    <section className={s.todaysSection} id="todays-section">
      <div className={s.wrapper}>
        <SectionTitle eventName="Today's" sectionName="Flash Sales" />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider
        filterFun={filterFlashSalesProducts}
        customization={todaysProductsCustomization}
      />

      <button type="button" className={s.viewProductsBtn}>
        View All Products
      </button>
    </section>
  );
};
export default TodaySection;
