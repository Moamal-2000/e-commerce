import ProductColors from "./ProductColors";
import ProductDealingControls from "./ProductDealingControls";
import styles from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos";
import ProductPreview from "./ProductPreview";
import ProductSizes from "./ProductSizes";

const ProductDetails = ({ data }) => {
  return (
    <section className={styles.detailsSection}>
      <ProductPreview data={data} />

      <section className={styles.details}>
        <ProductFirstInfos data={data} />

        <div className={styles.horizontalLine} />

        <ProductColors data={data} />
        <ProductSizes data={data} />
        <ProductDealingControls />
        <ProductFeatures />
      </section>
    </section>
  );
};
export default ProductDetails;
