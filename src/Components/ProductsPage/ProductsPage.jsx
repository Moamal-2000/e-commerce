import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import { productCardCustomizations } from "../../Data/staticData";
import ExploreProducts from "../Home/ProductPoster/ExploreProducts";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./ProductsPage.module.scss";

const ProductsPage = () => {
  useScrollOnMount(200);

  return (
    <div className="container">
      <main className={s.productsPage}>
        <PagesHistory history={["/", "Products"]} />

        <section className={s.products}>
          <ExploreProducts
            customization={productCardCustomizations.allProducts}
          />
        </section>
      </main>
    </div>
  );
};
export default ProductsPage;
