import { useSearchParams } from "react-router-dom";
import { productsData } from "../../Data/productsData";
import { capitalize } from "../../Functions/helper";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection";

const ProductDetailsPage = () => {
  const [searchParams, _] = useSearchParams();
  const PRODUCT_NAME = searchParams.get("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME
  )?.[0];
  const { name, type } = PRODUCT_DATA;
  const history = ["Account", capitalize(type), name.toUpperCase()];

  return (
    <div className="container">
      <main className={s.detailsPage}>
        <PagesHistory history={history} />
        <ProductDetails data={PRODUCT_DATA} />
        <RelatedItemsSection productType={type} currentProduct={PRODUCT_DATA} />
      </main>
    </div>
  );
};
export default ProductDetailsPage;
