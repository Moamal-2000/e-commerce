import { useTranslation } from "react-i18next";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./RelatedItemsSection.module.scss";

const RelatedItemsSection = ({ productType, currentProduct }) => {
  const hasRelatedProducts = getProductsByRelatedType().length > 0;
  const { t } = useTranslation();

  function getProductsByRelatedType() {
    return productsData.filter((product) => {
      const isSameType = product.category === productType;
      const isCurrentProduct = product === currentProduct;
      return isSameType && !isCurrentProduct;
    });
  }

  return (
    <section className={s.section}>
      <SectionTitle type={2} eventName={t("detailsPage.relatedItems")} />

      {!hasRelatedProducts && <p>No related items were found.</p>}

      <ProductsSlider
        filterFun={getProductsByRelatedType}
        skipToId="#footer-website-name-link"
        skipLinkTitle="Skip related products section"
        buttonsMarginBottom="0"
      />
    </section>
  );
};
export default RelatedItemsSection;
