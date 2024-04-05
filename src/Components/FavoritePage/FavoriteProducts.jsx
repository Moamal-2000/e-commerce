import { useSelector } from "react-redux";
import { productCardCustomizations } from "src/Data/staticData";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./FavoriteProducts.module.scss";

const FavoriteProducts = () => {
  const { favoritesProducts } = useSelector((state) => state.products);
  useScrollOnMount(160);

  return (
    <div className={s.favProducts}>
      {favoritesProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={productCardCustomizations.wishListProducts}
          removeFrom="favoritesProducts"
        />
      ))}
    </div>
  );
};
export default FavoriteProducts;
