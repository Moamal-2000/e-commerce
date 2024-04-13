import { useSelector } from "react-redux";
import { productCardCustomizations } from "src/Data/staticData";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import ProductCard from "../../Shared/ProductsCards/ProductCard/ProductCard";
import s from "./WishProducts.module.scss";

const WishProducts = () => {
  const { wishList } = useSelector((state) => state.products);
  useScrollOnMount(160);

  return (
    <div className={s.wishProducts}>
      {wishList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          customization={productCardCustomizations.wishListProducts}
          removeFrom="wishList"
        />
      ))}
    </div>
  );
};
export default WishProducts;
