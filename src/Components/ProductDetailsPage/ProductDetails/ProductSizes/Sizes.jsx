import { useState } from "react";
import { PRODUCT_SIZES } from "src/Data/globalVariables";
import s from "./Sizes.module.scss";

const Sizes = () => {
  const [sizeActiveIndex, setSizeActiveIndex] = useState(2);

  function choiceProductSize(index) {
    setSizeActiveIndex(index);
  }

  return (
    <div className={s.sizesWrapper}>
      {PRODUCT_SIZES.map(({ size, title }, index) => {
        const activeClass = index === sizeActiveIndex ? s.active : "";

        return (
          <button
            type="button"
            key={"size-" + index}
            className={`${s.size} ${activeClass}`}
            onClick={() => choiceProductSize(index)}
            title={title}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default Sizes;
