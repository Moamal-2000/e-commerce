import { allProductsCustomizations } from "../../Data/staticData";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
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
          <ExploreProducts customization={allProductsCustomizations} />
        </section>
      </main>
    </div>
  );
};
export default ProductsPage;
