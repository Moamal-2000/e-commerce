import { Helmet } from "react-helmet-async";
import { productsData } from "../../Data/productsData";
import { capitalize } from "../../Functions/helper";
import useGetSearchParam from "../../Hooks/Helper/useGetSearchParam";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  const PRODUCT_NAME = useGetSearchParam("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME
  )?.[0];
  const { name, category, shortName } = PRODUCT_DATA;
  const history = ["Account", capitalize(category), name.toUpperCase()];
  const paramsHistory = [
    {
      index: 1,
      link: `category/?type=${category}`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{shortName}</title>
      </Helmet>

      <div className="container">
        <main className={s.detailsPage} id="details-page">
          <PagesHistory history={history} paramsHistory={paramsHistory} />
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
