import { useSelector } from "react-redux";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./SearchProducts.module.scss";

const SearchProducts = () => {
  const { searchProducts } = useSelector((state) => state.products);
  const isFoundResults = searchProducts.length > 0;

  return (
    <div className={s.products}>
      {isFoundResults &&
        searchProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}

        {!isFoundResults && <p>No results found.</p>}
    </div>
  );
};
export default SearchProducts;
