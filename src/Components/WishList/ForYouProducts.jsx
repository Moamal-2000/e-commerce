import { productsData } from "../../Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import styles from "./ForYouProducts.module.scss";

const ForYouProducts = () => {
  const forYouProducts = productsData.filter((_, i) => i < 4);
  const productsCustomizations = {
    stopHover: false,
    showDiscount: true,
    showFavIcon: false,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: true,
  };

  return (
    <div className={styles.forYouProducts}>
      {forYouProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={productsCustomizations}
        />
      ))}
    </div>
  );
};
export default ForYouProducts;
