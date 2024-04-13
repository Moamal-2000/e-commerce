import { productsData } from "src/Data/productsData";
import s from "./ProductsSlider.module.scss";
import ProductCard from "../../ProductsCards/ProductCard/ProductCard";

const ProductsSlider = ({ filterFun = () => productsData, customization }) => {
  const filteredProducts = filterFun();

  return (
    <div className={s.productsSlider}>
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
