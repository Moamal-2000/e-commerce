import { Helmet } from "react-helmet-async";
import { categoryProductsCustomizations } from "../../Data/staticData";
import { capitalize } from "../../Functions/helper";
import useGetSearchParam from "../../Hooks/Helper/useGetSearchParam";
import CategoriesSection from "../Home/CategoriesSection/CategoriesSection";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductsCategory from "./ProductsCategory";
import s from "./ProductsCategoryPage.module.scss";

const ProductsCategoryPage = () => {
  const categoryType = useGetSearchParam("type");

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
      </Helmet>

      <div className="container">
        <main className={s.categoryPage}>
          <PagesHistory history={["/", capitalize(categoryType)]} />

          <section className={s.categoryContent}>
            <ProductsCategory
              categoryName={categoryType}
              customization={categoryProductsCustomizations}
            />
          </section>

          <CategoriesSection />
        </main>
      </div>
    </>
  );
};
export default ProductsCategoryPage;
