import { useEffect, useRef, useState } from "react";
import { PRODUCT_SIZES } from "src/Data/globalVariables";
import s from "./Sizes.module.scss";

const Sizes = ({ sizes }) => {
  const [sizeActiveIndex, setSizeActiveIndex] = useState();
  const sizesEleRef = useRef();

  function choiceProductSize(index) {
    setSizeActiveIndex(index);
    setFirstSizeActiveClass(false);
  }

  function setFirstSizeActiveClass(active) {
    const firstSizeEle = sizesEleRef.current?.children[0];
    firstSizeEle.classList[active ? "add" : "remove"](s.active);
  }

  useEffect(() => {
    setFirstSizeActiveClass(true);
  }, []);

  return (
    <div className={s.sizesWrapper} ref={sizesEleRef}>
      {PRODUCT_SIZES.map(({ size, title }, index) => {
        const isSizeExist = sizes.includes(size);
        const activeClass = sizeActiveIndex === index ? s.active : "";

        return (
          isSizeExist && (
            <button
              type="button"
              key={"size-" + index}
              className={`${s.size} ${activeClass}`}
              onClick={() => choiceProductSize(index)}
              title={title}
            >
              {size}
            </button>
          )
        );
      })}
    </div>
  );
};

export default Sizes;
