import { productsData } from "../../../Data/productsData";
import ProductCard from "../ProductsCards/ProductCard";
import styles from "./ProductsSlider.module.scss";

const ProductsSlider = ({ filterFun = () => productsData, customization }) => {
  const filteredProducts = filterFun();

  return (
    <div className={styles.productsSlider}>
      {filteredProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          customization={customization}
        />
      ))}
    </div>
  );
};

export default ProductsSlider;
