import { Helmet } from "react-helmet-async";
import CategoriesSection from "../Home/CategoriesSection/CategoriesSection";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductsCategory from "./ProductsCategory";
import s from "./ProductsCategoryPage.module.scss";
import useGetSearchParam from "../../Hooks/Helper/useGetSearchParam";

const ProductsCategoryPage = () => {
  const categoryType = useGetSearchParam("type")
  const productsCustomizations = {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
  };

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
      </Helmet>

      <div className="container">
        <main className={s.categoryPage}>
          <PagesHistory history={["/", categoryType]} />

          <section className={s.categoryContent}>
            <ProductsCategory
              categoryName={categoryType}
              customization={productsCustomizations}
            />
          </section>

          <CategoriesSection />
        </main>
      </div>
    </>
  );
};
export default ProductsCategoryPage;
