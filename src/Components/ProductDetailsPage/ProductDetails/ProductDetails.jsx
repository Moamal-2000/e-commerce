import { useRef } from "react";
import { useSelector } from "react-redux";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import SkeletonProductDetails from "../../Shared/SkeletonLoaders/DetailsPage/SkeletonProductDetails";
import ProductPreview from "../ProductPreview/ProductPreview";
import ProductColorsSection from "./ProductColorsSection";
import ProductDealingControls from "./ProductDealingControls";
import s from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos";
import ProductSizes from "./ProductSizes";

const ProductDetails = ({ data }) => {
  const { previewImg, isZoomInPreviewActive, loadingProductDetails } =
    useSelector((state) => state.global);
  const activeClass = isZoomInPreviewActive ? s.active : "";
  const zoomInImgRef = useRef();
  const isWebsiteOnline = useOnlineStatus();

  function handleZoomInEffect(e) {
    const imgRect = e.target.getClientRects()[0];
    const xPosition = e.clientX - imgRect.left;
    const yPosition = e.clientY - imgRect.top;

    zoomInImgRef.current.style.transform = `translate(-${xPosition * 2}px, -${
      yPosition * 2
    }px)`;
  }

  return (
    <>
      {!loadingProductDetails && isWebsiteOnline && (
        <section className={s.detailsSection} id="details-section">
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

      {(loadingProductDetails || !isWebsiteOnline) && (
        <SkeletonProductDetails />
      )}
    </>
  );
};
export default ProductDetails;
