import { useSelector } from "react-redux";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./WishProducts.module.scss";

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
    <div className={s.wishProducts}>
      {wishList.map((product) => (
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
