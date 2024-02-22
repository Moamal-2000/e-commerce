import { productsData } from "../../../Data/productsData";
import ProductCard from "../../Shared/ProductsCards/ProductCard";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  return (
    <section className={styles.productsSlider}>
      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};
export default ProductsSlider;
