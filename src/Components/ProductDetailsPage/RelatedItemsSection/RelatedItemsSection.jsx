import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import s from "./RelatedItemsSection.module.scss";

const RelatedItemsSection = ({ productType, currentProduct }) => {
  const hasRelatedProducts = getProductsByRelatedType().length > 0;

  function getProductsByRelatedType() {
    return productsData.filter((product) => {
      const isSameType = product.category === productType;
      const isCurrentProduct = product === currentProduct;
      return isSameType && !isCurrentProduct;
    });
  }

  return (
    <section className={s.section}>
      <SectionTitle type={2} eventName="Related Item" />

      {!hasRelatedProducts && <p>No related items were found.</p>}

      <ProductsSlider filterFun={getProductsByRelatedType} />
    </section>
  );
};
export default RelatedItemsSection;
