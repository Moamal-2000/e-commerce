import { useState } from "react";
import s from "./ProductSizes.module.scss";

const ProductSizes = () => {
  return (
    <section className={s.sizes}>
      <span>Size:</span>
      <Sizes />
    </section>
  );
};
export default ProductSizes;

const Sizes = () => {
  const [sizeActiveIndex, setSizeActiveIndex] = useState(2);
  const PRODUCT_SIZES = ["XL", "S", "M", "L", "XL"];

  function choiceProductSize(e, i) {
    setSizeActiveIndex(i);
  }

  return (
    <div className={s.sizesWrapper}>
      {PRODUCT_SIZES.map((size, i) => {
        const activeClass = i === sizeActiveIndex ? s.active : "";
        return (
          <div
            key={"size-" + i}
            className={`${s.size} ${activeClass}`}
            onClick={(e) => choiceProductSize(e, i)}
          >
            {size}
          </div>
        );
      })}
    </div>
  );
};
