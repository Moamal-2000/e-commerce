import { useDispatch, useSelector } from "react-redux";
import { setPreviewImg } from "./PreviewImages";
import s from "./ProductImages.module.scss";

const ProductImages = ({ img, productData, index }) => {
  const { previewImg } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const activeClass = previewImg === img ? s.active : "";
  const { shortName, otherImages } = productData;

  return (
    <button
      type="button"
      className={`${s.imgHolder} ${activeClass}`}
      onClick={() => setPreviewImg(otherImages[index], dispatch)}
    >
      <img src={img} alt={`${shortName} thumbnail image`} />
    </button>
  );
};
export default ProductImages;
