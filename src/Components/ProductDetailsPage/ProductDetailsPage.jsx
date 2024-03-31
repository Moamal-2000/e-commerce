import { Helmet } from "react-helmet-async";
import { productsData } from "../../Data/productsData";
import { capitalize } from "../../Functions/helper";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
import useGetSearchParam from "../../Hooks/Helper/useGetSearchParam";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  useScrollOnMount(200);
  const PRODUCT_NAME = useGetSearchParam("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME
  )?.[0];
  const { name, category, shortName } = PRODUCT_DATA;
  const history = ["Account", capitalize(category), name.toUpperCase()];
  const historyPaths = [
    {
      index: 0,
      path: "/profile",
    },
    {
      index: 1,
      path: `/category?type=${category}`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{shortName}</title>
      </Helmet>

      <div className="container">
        <main className={s.detailsPage} id="details-page">
          <PagesHistory history={history} historyPaths={historyPaths} />
          <ProductDetails data={PRODUCT_DATA} />
          <RelatedItemsSection
            productType={category}
            currentProduct={PRODUCT_DATA}
          />
        </main>
      </div>
    </>
  );
};
export default ProductDetailsPage;
