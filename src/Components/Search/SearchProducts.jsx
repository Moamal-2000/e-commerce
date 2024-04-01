import { useSelector } from "react-redux";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./SearchProducts.module.scss";

const SearchProducts = () => {
  const { searchProducts } = useSelector((state) => state.products);
  const isFoundResults = searchProducts.length > 0;

  return (
    <>
      {isFoundResults &&
        searchProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}

      {!isFoundResults && <p className={s.message}>No results found.</p>}
    </>
  );
};
export default SearchProducts;
