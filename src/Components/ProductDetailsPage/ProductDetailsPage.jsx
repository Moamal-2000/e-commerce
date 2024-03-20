import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { productsData } from "../../Data/productsData";
import { capitalize } from "../../Functions/helper";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  const [searchParams, _] = useSearchParams();
  const PRODUCT_NAME = searchParams.get("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME
  )?.[0];
  const { name, type, shortName } = PRODUCT_DATA;
  const history = ["Account", capitalize(type), name.toUpperCase()];

  return (
    <>
      <Helmet>
        <title>{shortName}</title>
      </Helmet>

      <div className="container">
        <main className={s.detailsPage} id="details-page">
          <PagesHistory history={history} />
          <ProductDetails data={PRODUCT_DATA} />
          <RelatedItemsSection
            productType={type}
            currentProduct={PRODUCT_DATA}
          />
        </main>
      </div>
    </>
  );
};
export default ProductDetailsPage;
