import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateGlobalState } from "src/Features/globalSlice";
import PreviewImages from "./PreviewImages";
import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data, handleZoomInEffect }) => {
  const { previewImg } = useSelector((state) => state.global);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { img, name, otherImages } = data;
  const hasOtherImages = otherImages?.length !== 0 && otherImages;

  function setZoomInPreview(value = false) {
    dispatch(updateGlobalState({ key: "isZoomInPreviewActive", value: value }));
  }

  function setPreviewImg(img) {
    dispatch(updateGlobalState({ key: "previewImg", value: img }));
  }

  useEffect(() => {
    setPreviewImg(img);
  }, [searchParams]);

  return (
    <section className={s.images}>
      {hasOtherImages && (
        <PreviewImages
          data={otherImages}
          previewImg={previewImg}
          setPreviewImg={setPreviewImg}
        />
      )}

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
