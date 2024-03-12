import { useSearchParams } from "react-router-dom";
import { productsData } from "../../Data/productsData";
import { capitalize } from "../../Functions/helper";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./ProductDetailsPage.module.scss";
import ProductDetails from "./ProductDetails";

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
      <main className={styles.detailsPage}>
        <PagesHistory history={history} />

        <ProductDetails data={PRODUCT_DATA} />
      </main>
    </div>
  );
};
export default ProductDetailsPage;
