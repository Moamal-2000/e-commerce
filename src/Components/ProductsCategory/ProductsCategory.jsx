import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import s from "./ProductsCategory.module.scss";

const ProductsCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryType = searchParams.get("type");

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
      </Helmet>

      <main className={s.categoryPage}></main>
    </>
  );
};
export default ProductsCategory;
