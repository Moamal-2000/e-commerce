import { useState } from "react";
import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data }) => {
  const { img, name, otherImages } = data;
  const [previewImg, setPreviewImg] = useState(img);
  const hasOtherImages = otherImages?.length !== 0 && otherImages;

  return (
    <section className={s.images}>
      {hasOtherImages && (
        <div className={s.otherImages}>
          {otherImages.map((img, i) => (
            <div
              key={i}
              className={s.imgHolder}
              onClick={() => setPreviewImg(img)}
            >
              <img src={img} alt="product's image" />
            </div>
          ))}
        </div>
      )}

      <div className={s.previewImgHolder}>
        <img src={previewImg} alt={name} />
      </div>
    </section>
  );
};
export default ProductPreview;
