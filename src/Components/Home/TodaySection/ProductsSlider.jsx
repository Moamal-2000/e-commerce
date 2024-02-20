import { productsData } from "../../../Data/staticData";
import ProductCard from "../../Shared/ProductsCards/ProductCard";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  // const neededProducts = productsData.filter((_, i) => i < 4);

  return (
    <article className={styles.productsSlider}>
      <span className={styles.hideScroll}></span>

      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </article>
  );
};
export default ProductsSlider;
