import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard/ProductCard";
import s from "./ProductsCategory.module.scss";

const ProductsCategory = ({ categoryName, customization }) => {
  const { t } = useTranslation();
  const categoryProducts = productsData.filter(
    (product) => product.category === categoryName
  );
  const hasNoProducts = categoryProducts.length === 0;

  if (hasNoProducts)
    return (
      <div className={s.notFoundMessage}>
        <p>{t("common.weDontHaveProducts")}</p>
        <p>
          {t("common.backTo")} <Link to="/">{t("common.home")}</Link>
        </p>
      </div>
    );

  return (
    <div className={s.products}>
      {categoryProducts?.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          customization={customization}
        />
      ))}
    </div>
  );
};
export default ProductsCategory;
