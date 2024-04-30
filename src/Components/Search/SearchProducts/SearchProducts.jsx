import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ProductCard from "../../Shared/ProductsCards/ProductCard/ProductCard";
import s from "./SearchProducts.module.scss";

const SearchProducts = () => {
  const { searchProducts } = useSelector((state) => state.products);
  const isFoundResults = searchProducts.length > 0;
  const { t } = useTranslation();

  return (
    <>
      {isFoundResults &&
        searchProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}

      {!isFoundResults && (
        <p className={s.message}>{t("common.resultsNotFound")}</p>
      )}
    </>
  );
};
export default SearchProducts;
