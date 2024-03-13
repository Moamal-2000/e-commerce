import ProductColors from "./ProductColors";
import ProductDealingControls from "./ProductDealingControls";
import s from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos";
import ProductPreview from "./ProductPreview";
import ProductSizes from "./ProductSizes";

const ProductDetails = ({ data }) => {
  return (
    <section className={s.detailsSection}>
      <ProductPreview data={data} />

      <section className={s.details}>
        <ProductFirstInfos data={data} />

        <div className={s.horizontalLine} />

        <ProductColors data={data} />
        <ProductSizes data={data} />
        <ProductDealingControls />
        <ProductFeatures />
      </section>
    </section>
  );
};
export default ProductDetails;
