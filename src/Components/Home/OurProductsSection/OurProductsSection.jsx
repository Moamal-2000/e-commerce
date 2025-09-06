import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productCardCustomizations } from "src/Data/staticData";
import ProductSliderSkipLink from "../../Shared/MidComponents/ProductsSlider/SliderButtons/ProductSliderSkipLink/ProductSliderSkipLink";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";

const OurProductsSection = () => {
  const [isSkipButtonClicked, setIsSkipButtonClicked] = useState(false);
  const { t } = useTranslation();
  const ourProducts = "sectionTitles.ourProducts";

  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${ourProducts}.title`)}
          sectionName={t(`${ourProducts}.exploreProducts`)}
        />

        <ProductSliderSkipLink
          setIsSkipButtonClicked={setIsSkipButtonClicked}
          href="#view-our-products"
          right="0"
        >
          Skip our products
        </ProductSliderSkipLink>
      </div>

      <ExploreProducts
        numOfProducts={7}
        customization={productCardCustomizations.ourProducts}
        tabIndex={isSkipButtonClicked ? -1 : 0}
        loading="lazy"
      />

      <Link to="/products" className={s.viewProductsBtn} id="view-our-products">
        {t("buttons.viewAllProducts")}
      </Link>
    </section>
  );
};
export default OurProductsSection;
