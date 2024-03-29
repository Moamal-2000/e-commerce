import { useSelector } from "react-redux";
import { wishListProductsCustomization } from "../../Data/staticData";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./FavoriteProducts.module.scss";

const FavoriteProducts = () => {
  const { favoritesProducts } = useSelector(
    (state) => state.products
  );
  useScrollOnMount(160);

  return (
    <div className={s.wishProducts}>
      {favoritesProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={wishListProductsCustomization}
          removeFrom="favoritesProducts"
        />
      ))}
    </div>
  );
};
export default FavoriteProducts;
