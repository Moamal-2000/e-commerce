import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productCardCustomizations } from "src/Data/staticData";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useUpdateLoadingState from "src/Hooks/App/useUpdateLoadingState";
import { updateGlobalState } from "../../Features/globalSlice";
import ExploreProducts from "../Home/ProductPoster/ExploreProducts";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import s from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const { loadingProductsPage } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useUpdateLoadingState({
    loadingState: loadingProductsPage,
    loadingKey: "loadingProductsPage",
    actionMethod: updateGlobalState,
    delays: SIMPLE_DELAYS,
    cleanFunction: () =>
      dispatch(updateGlobalState({ key: "loadingProductsPage", value: true })),
  });
  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>Products</title>
        <link ref="preconnect" href="https://api.github.com/" />
      </Helmet>

      <div className="container">
        <main className={s.productsPage}>
          <PagesHistory history={["/", t("history.products")]} />

          <section className={s.products} id="products-section">
            {!loadingProductsPage && (
              <ExploreProducts
                customization={productCardCustomizations.allProducts}
              />
            )}

            {loadingProductsPage && (
              <div className={s.SkeletonCards}>
                <SkeletonCards numberOfCards={8} />
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};
export default ProductsPage;
