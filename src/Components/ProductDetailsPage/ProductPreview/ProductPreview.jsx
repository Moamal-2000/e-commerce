import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import PreviewImages from "./ProductImages/PreviewImages";
import s from "./ProductPreview.module.scss";

const ProductPreview = ({ productData, handleZoomInEffect }) => {
  const { previewImg } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { name, otherImages } = productData;
  const hasOtherImages = otherImages?.length !== 0 && otherImages;

  function setZoomInPreview(value = false) {
    dispatch(updateGlobalState({ key: "isZoomInPreviewActive", value: value }));
  }

  return (
    <section className={s.images}>
      {hasOtherImages && <PreviewImages productData={productData} />}

      <div className={s.previewImgHolder}>
        <img
          src={previewImg}
          alt={name}
          onMouseMove={handleZoomInEffect}
          onMouseEnter={() => setZoomInPreview(true)}
          onMouseLeave={() => setZoomInPreview(false)}
        />
      </div>
    </section>
  );
};
export default ProductPreview;
