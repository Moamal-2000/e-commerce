import { productsData } from "src/Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./ForYouProducts.module.scss";

const ForYouProducts = () => {
  const forYouProducts = productsData.filter((_, i) => i < 4);

  return (
    <div className={s.forYouProducts}>
      {forYouProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ForYouProducts;
