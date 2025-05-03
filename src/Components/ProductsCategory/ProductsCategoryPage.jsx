import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { WEBSITE_NAME } from "src/Data/constants";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productCardCustomizations } from "src/Data/staticData";
import { updateLoadingState } from "src/Features/loadingSlice";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useUpdateLoadingOnSamePage from "src/Hooks/App/useUpdateLoadingOnSamePage";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import CategoriesSection from "../Home/CategoriesSection/CategoriesSection";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import ProductsCategory from "./ProductsCategory";
import s from "./ProductsCategoryPage.module.scss";

const ProductsCategoryPage = () => {
  const { loadingCategoryPage } = useSelector((state) => state.loading);
  const { t } = useTranslation();
  const categoryType = useGetSearchParam("type");
  const categoryTypeTrans = t(`categoriesData.${categoryType}`);
  const isWebsiteOnline = useOnlineStatus();

  useUpdateLoadingOnSamePage({
    loadingKey: "loadingCategoryPage",
    actionMethod: updateLoadingState,
    delays: SIMPLE_DELAYS,
    dependencies: [categoryType],
  });
  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
        <meta
          name="description"
          content={`Discover a wide range of products categorized for easy browsing on ${WEBSITE_NAME}. Explore our extensive selection by category or type to find exactly what you're looking for.`}
        />
      </Helmet>

      <div className="container">
        <main className={s.categoryPage}>
          <PagesHistory history={["/", categoryTypeTrans]} />

          <section className={s.categoryContent} id="category-page">
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
