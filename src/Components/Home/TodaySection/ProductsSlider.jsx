import { productsData } from "../../../Data/staticData";
import ProductCard from "../../Shared/ProductsCards/ProductCard";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  return (
    <article className={styles.productsSlider}>
      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </article>
  );
};
export default ProductsSlider;
