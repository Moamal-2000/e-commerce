import { productsData } from "../../Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import styles from "./ForYouProducts.module.scss";

const ForYouProducts = () => {
  const forYouProducts = productsData.filter((product, i) => i < 4);
  const customizationCard = {
    stopHover: false,
    showDiscount: true,
    showFavIcon: false,
    showDetailsIcon: true,
    showRemoveIcon: false,
  };

  return (
    <div className={styles.forYouProducts}>
      {forYouProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={customizationCard}
        />
      ))}
    </div>
  );
};
export default ForYouProducts;
