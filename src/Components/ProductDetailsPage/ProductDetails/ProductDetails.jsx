import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../../Features/globalSlice";
import ProductPreview from "../ProductPreviw/ProductPreview";
import ProductColors from "./ProductColors";
import ProductDealingControls from "./ProductDealingControls";
import s from "./ProductDetails.module.scss";
import ProductFeatures from "./ProductFeatures";
import ProductFirstInfos from "./ProductFirstInfos";
import ProductSizes from "./ProductSizes";

const ProductDetails = ({ data }) => {
  const { previewImg, isZoomInPreviewActive } = useSelector(
    (state) => state.global
  );
  const zoomInImgRef = useRef();
  const activeClass = isZoomInPreviewActive ? s.active : "";

  function handleZoomInEffect(e) {
    zoomInImgRef.current.style.cssText = `
      transform: translate(-${e.offsetX * 2}px, -${e.offsetY * 2}px)
    `;
  }

  return (
    <section className={s.detailsSection}>
      <ProductPreview
        data={data}
        zoomInImgRef={zoomInImgRef}
        handleZoomInEffect={handleZoomInEffect}
      />

      <section className={s.details}>
        <div className={`${s.zoomInPreview} ${activeClass}`}>
          <img src={previewImg} alt="product preview" ref={zoomInImgRef} />
        </div>

        <ProductFirstInfos data={data} />

        <div className={s.horizontalLine} />

        <ProductColors data={data} />
        <ProductSizes data={data} />
        <ProductDealingControls />
        <ProductFeatures />
      </section>
    </section>
  );
};
export default ProductDetails;
