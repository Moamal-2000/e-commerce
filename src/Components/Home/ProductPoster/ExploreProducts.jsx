import { productsData } from "../../../Data/productsData";
import ProductCard from "../../Shared/ProductsCards/ProductCard";
import styles from "./ExploreProducts.module.scss";

const ExploreProducts = ({ numOfProducts }) => {
  const filteredProducts = productsData.filter((_, i) => i < numOfProducts);

  return (
    <div className={styles.products}>
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default ExploreProducts;
