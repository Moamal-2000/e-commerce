import ExploreProducts from "../Home/ProductPoster/ExploreProducts";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const productsCustomizations = {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    showWishList: true,
  };

  return (
    <div className="container">
      <main className={s.productsPage}>
        <PagesHistory history={["/", "Products"]} />

        <section className={s.products}>
          <ExploreProducts customization={productsCustomizations} />
        </section>
      </main>
    </div>
  );
};
export default ProductsPage;
