import { productsData } from "src/Data/productsData";
import ProductCard from "../../ProductsCards/ProductCard/ProductCard";
import s from "./ForYouProducts.module.scss";

const ForYouProducts = ({ loading = "eager" }) => {
  const forYouProducts = productsData.filter((_, i) => i < 4);

  return (
    <div className={s.forYouProducts}>
      {forYouProducts.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};
export default ForYouProducts;
