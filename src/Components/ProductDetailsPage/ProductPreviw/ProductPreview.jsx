import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateState } from "../../../Features/globalSlice";
import useEventListener from "../../../Hooks/useEventListener";
import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data, handleZoomInEffect }) => {
  const { previewImg, isZoomInPreviewActive } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const { img, name, otherImages } = data;
  const [searchParams, _] = useSearchParams();
  const previewImgRef = useRef();
  const hasOtherImages = otherImages?.length !== 0 && otherImages;
  useEventListener(previewImgRef, "mousemove", handleZoomInEffect);
  useEventListener(previewImgRef, "mouseenter", () => setZoomInPreview(true));
  useEventListener(previewImgRef, "mouseout", () => setZoomInPreview(false));

  function setZoomInPreview(value = false) {
    dispatch(updateState({ key: "isZoomInPreviewActive", value: value }));
  }

  function setPreviewImg(img) {
    dispatch(updateState({ key: "previewImg", value: img }));
  }

  useEffect(() => {
    setPreviewImg(img);
  }, [searchParams]);

  return (
    <section className={s.images}>
      {hasOtherImages && (
        <div className={s.otherImages}>
          {otherImages.map((img, i) => (
            <div
              key={i}
              className={s.imgHolder}
              onClick={() => setPreviewImg(otherImages[i])}
            >
              <img src={img} alt="product's image" />
            </div>
          ))}
        </div>
      )}

      <div className={s.previewImgHolder}>
        <img src={previewImg} alt={name} ref={previewImgRef} />
      </div>
    </section>
  );
};
export default ProductPreview;
