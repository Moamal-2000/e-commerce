import { productsData } from "src/Data/productsData";
import ProductCard from "../../Shared/ProductsCards/ProductCard/ProductCard";
import s from "./ExploreProducts.module.scss";

const ExploreProducts = ({ numOfProducts = -1, customization, tabIndex }) => {
  const filteredProducts = productsData.filter((_, i) => i > numOfProducts);

  return (
    <div className={s.products}>
      {filteredProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          customization={customization}
          tabIndex={tabIndex}
        />
      ))}
    </div>
  );
};
export default ExploreProducts;
