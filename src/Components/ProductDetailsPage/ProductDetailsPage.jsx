import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productsData } from "src/Data/productsData";
import { capitalize, random } from "src/Functions/helper";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import { updateGlobalState } from "../../Features/globalSlice";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  useScrollOnMount(200);
  const PRODUCT_NAME = useGetSearchParam("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME.toLowerCase()
  )?.[0];
  const { name, category, shortName } = PRODUCT_DATA;
  const history = ["Account", capitalize(category), name.toUpperCase()];
  const { loadingProductDetails } = useSelector((state) => state.global);
  const dispatch = useDispatch();
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
  let randomDelay = random(SIMPLE_DELAYS);
  let timerId;

  function updateLoadingState() {
    dispatch(updateGlobalState({ key: "loadingProductDetails", value: true }));

    if (!loadingProductDetails) {
      timerId = setTimeout(() => {
        dispatch(
          updateGlobalState({ key: "loadingProductDetails", value: false })
        );
      }, randomDelay);

      randomDelay = random(SIMPLE_DELAYS);
    }
  }

  useEffect(() => {
    updateLoadingState();

    return () => {
      clearTimeout(timerId);
    };
  }, [PRODUCT_NAME]);

  return (
    <>
      <Helmet>
        <title>{shortName}</title>
      </Helmet>

      <div className="container">
        <main className={s.detailsPage}>
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
