import { useSelector } from "react-redux";
import { productsData } from "../../Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import styles from "./WishProducts.module.scss";

const WishProducts = () => {
  const { wishList } = useSelector((state) => state.products);
  const customizationCard = {
    stopHover: true,
    showDiscount: true,
    showFavIcon: false,
    showDetailsIcon: false,
    showRemoveIcon: true,
  };

  return (
    <div className={styles.wishProducts}>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={customizationCard}
        />
      ))}
    </div>
  );
};
export default WishProducts;
