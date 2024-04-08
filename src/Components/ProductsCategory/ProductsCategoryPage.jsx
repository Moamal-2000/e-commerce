import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { productCardCustomizations } from "src/Data/staticData";
import { capitalize } from "src/Functions/helper";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import { SIMPLE_DELAYS } from "../../Data/globalVariables";
import { updateGlobalState } from "../../Features/globalSlice";
import { random } from "../../Functions/helper";
import CategoriesSection from "../Home/CategoriesSection/CategoriesSection";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import ProductsCategory from "./ProductsCategory";
import s from "./ProductsCategoryPage.module.scss";

const ProductsCategoryPage = () => {
  const { loadingCategoryPage } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const categoryType = useGetSearchParam("type");
  let randomDelay = random(SIMPLE_DELAYS);
  let timerId;

  function updateLoadingState() {
    dispatch(updateGlobalState({ key: "loadingCategoryPage", value: true }));

    if (!loadingCategoryPage) {
      timerId = setTimeout(() => {
        dispatch(
          updateGlobalState({ key: "loadingCategoryPage", value: false })
        );
      }, randomDelay);

      randomDelay = random(SIMPLE_DELAYS);
    }
  }

  useEffect(() => {
    updateLoadingState();

    return () => {
      clearTimeout(timerId);
    };
  }, [categoryType]);

  return (
    <>
      <Helmet>
        <title>{categoryType}</title>
      </Helmet>

      <div className="container">
        <main className={s.categoryPage}>
          <PagesHistory history={["/", capitalize(categoryType)]} />

          <section className={s.categoryContent}>
            {!loadingCategoryPage && (
              <ProductsCategory
                categoryName={categoryType}
                customization={productCardCustomizations.categoryProducts}
              />
            )}

            <div className={s.skeletonCards}>
              {loadingCategoryPage && <SkeletonCards numberOfCards={4} />}
            </div>
          </section>

          <CategoriesSection />
        </main>
      </div>
    </>
  );
};
export default ProductsCategoryPage;
