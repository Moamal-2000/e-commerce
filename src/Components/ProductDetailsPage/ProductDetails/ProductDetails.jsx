import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELAYS } from "../../../Data/globalVariables";
import { updateState } from "../../../Features/globalSlice";
import { random } from "../../../Functions/helper";
import SkeletonProductDetails from "../../Shared/SkeletonLoaders/DetailsPage/SkeletonProductDetails";
import ProductPreview from "../ProductPreviw/ProductPreview";
import ProductColorsSection from "./ProductColorsSection";
import ProductDealingControls from "./ProductDealingControls";
import s from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos";
import ProductSizes from "./ProductSizes";

const ProductDetails = ({ data }) => {
  const { previewImg, isZoomInPreviewActive, loadingProductDetails } =
    useSelector((state) => state.global);
  const zoomInImgRef = useRef();
  const dispatch = useDispatch();
  const activeClass = isZoomInPreviewActive ? s.active : "";
  let randomDelay = random(DELAYS);

  function handleZoomInEffect(e) {
    const imgRect = e.target.getClientRects()[0];
    const xPosition = e.clientX - imgRect.left;
    const yPosition = e.clientY - imgRect.top;

    zoomInImgRef.current.style.transform = `translate(-${xPosition * 2}px, -${
      yPosition * 2
    }px)`;
  }

  function updateLoadingState() {
    let timerId;

    if (loadingProductDetails) {
      timerId = setTimeout(() => {
        dispatch(updateState({ key: "loadingProductDetails", value: false }));
      }, randomDelay);

      randomDelay = random(DELAYS);
    }

    return () => clearTimeout(timerId);
  }

  // useEffect(() => {
  //   updateLoadingState();
  // }, []);

  return (
    <>
      {!loadingProductDetails && (
        <section className={s.detailsSection}>
          <ProductPreview data={data} handleZoomInEffect={handleZoomInEffect} />

          <section className={s.details}>
            <div className={`${s.zoomInPreview} ${activeClass}`}>
              <img src={previewImg} alt="product preview" ref={zoomInImgRef} />
            </div>

            <ProductFirstInfos data={data} />

            <div className={s.horizontalLine} />

            <ProductColorsSection data={data} />
            <ProductSizes data={data} />
            <ProductDealingControls />
            <ProductFeatures />
          </section>
        </section>
      )}

      {loadingProductDetails && <SkeletonProductDetails />}
    </>
  );
};
export default ProductDetails;
