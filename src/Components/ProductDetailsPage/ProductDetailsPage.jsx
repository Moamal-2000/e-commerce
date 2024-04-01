import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { SIMPLE_DELAYS } from "../../Data/globalVariables";
import { productsData } from "../../Data/productsData";
import { updateState } from "../../Features/globalSlice";
import { capitalize, random } from "../../Functions/helper";
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
  const { loadingProductDetails } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  let randomDelay = random(SIMPLE_DELAYS);
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

  function updateLoadingState() {
    dispatch(updateState({ key: "loadingProductDetails", value: true }));

    let timerId;

    if (!loadingProductDetails) {
      timerId = setTimeout(() => {
        dispatch(updateState({ key: "loadingProductDetails", value: false }));
      }, randomDelay);

      randomDelay = random(SIMPLE_DELAYS);
    }

    return () => clearTimeout(timerId);
  }

  useEffect(() => {
    updateLoadingState();
  }, [PRODUCT_NAME]);

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
