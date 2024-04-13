import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { productCardCustomizations } from "src/Data/staticData";
import { capitalize } from "src/Functions/helper";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import { SIMPLE_DELAYS } from "../../Data/globalVariables";
import { updateGlobalState } from "../../Features/globalSlice";
import useUpdateLoadingOnSamePage from "../../Hooks/App/useUpdateLoadingOnSamePage";
import useOnlineStatus from "../../Hooks/Helper/useOnlineStatus";
import CategoriesSection from "../Home/CategoriesSection/CategoriesSection";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import ProductsCategory from "./ProductsCategory";
import s from "./ProductsCategoryPage.module.scss";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";

const ProductsCategoryPage = () => {
  const { loadingCategoryPage } = useSelector((state) => state.global);
  const categoryType = useGetSearchParam("type");
  const isWebsiteOnline = useOnlineStatus();
  useScrollOnMount(200);
  useUpdateLoadingOnSamePage({
    loadingKey: "loadingCategoryPage",
    actionMethod: updateGlobalState,
    delays: SIMPLE_DELAYS,
    dependencies: [categoryType],
  });

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
      </Helmet>

      <div className="container">
        <main className={s.categoryPage}>
          <PagesHistory history={["/", capitalize(categoryType)]} />

          <section className={s.categoryContent}>
            {!loadingCategoryPage && isWebsiteOnline && (
              <ProductsCategory
                categoryName={categoryType}
                customization={productCardCustomizations.categoryProducts}
              />
            )}

            {(loadingCategoryPage || !isWebsiteOnline) && (
              <div className={s.skeletonCards}>
                <SkeletonCards numberOfCards={4} />
              </div>
            )}
          </section>

          <CategoriesSection />
        </main>
      </div>
    </>
  );
};
export default ProductsCategoryPage;
