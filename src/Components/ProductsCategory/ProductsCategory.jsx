import { useEffect } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard";
import s from "./ProductsCategory.module.scss";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";

const ProductsCategory = ({ categoryName, customization }) => {
  const categoryProducts = productsData.filter(
    (product) => product.category === categoryName
  );
  const hasNoProducts = categoryProducts.length === 0;
  useScrollOnMount(200)

  if (hasNoProducts)
    return (
      <div className={s.notFoundMessage}>
        <p>Sorry We don't have any products in this category</p>
        <p>
          Back to the <Link to="/">Home page</Link>
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
