import { useDispatch, useSelector } from "react-redux";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productCardCustomizations } from "src/Data/staticData";
import { updateState } from "src/Features/productsSlice";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useUpdateLoadingState from "../../Hooks/App/useUpdateLoadingState";
import ExploreProducts from "../Home/ProductPoster/ExploreProducts";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import s from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const { loadingProductsPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useScrollOnMount(200);
  useUpdateLoadingState({
    loadingState: loadingProductsPage,
    loadingKey: "loadingProductsPage",
    delays: SIMPLE_DELAYS,
    cleanFunction: () =>
      dispatch(updateState({ key: "loadingProductsPage", value: true })),
  });

  return (
    <div className="container">
      <main className={s.productsPage}>
        <PagesHistory history={["/", "Products"]} />

        <section className={s.products}>
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
  );
};
export default ProductsPage;
