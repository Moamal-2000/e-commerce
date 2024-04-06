import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import s from "./ProductPreview.module.scss";
import { updateGlobalState } from "../../../Features/globalSlice";

const ProductPreview = ({ data, handleZoomInEffect }) => {
  const { previewImg } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
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
        <PreviewImages data={otherImages} setPreviewImg={setPreviewImg} />
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

const PreviewImages = ({ data, setPreviewImg }) => {
  return (
    <div className={s.otherImages}>
      {data.map((img, i) => (
        <div
          key={i}
          className={s.imgHolder}
          onClick={() => setPreviewImg(data[i])}
        >
          <img src={img} alt="product's image" />
        </div>
      ))}
    </div>
  );
};
