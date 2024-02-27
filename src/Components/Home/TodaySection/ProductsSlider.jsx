import { productsData } from "../../../Data/productsData";
import ProductCard from "../../Shared/ProductsCards/ProductCard";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  return (
    <div className={styles.productsSlider}>
      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default ProductsSlider;
