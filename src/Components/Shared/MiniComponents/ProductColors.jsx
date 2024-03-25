import { useState } from "react";
import s from "./ProductColors.module.scss";
import ToolTip from "./ToolTip";

const ProductColors = ({ colors, showToolTip = false }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  function choiceProductColor(e, i) {
    setActiveColorIndex(i);
  }

  return colors.map(({ color, name }, i) => {
    const firstItemActiveClass = i === activeColorIndex ? s.active : "";

    return (
      <div
        key={"color-" + i}
        className={`${s.color} ${firstItemActiveClass}`}
        style={{ backgroundColor: color }}
        onClick={(e) => choiceProductColor(e, i)}
        aria-label={name + " color"}
      >
        {showToolTip && (
          <ToolTip left="50%" top="40px" content={name + " color"} />
        )}
      </div>
    );
  });
};

export default ProductColors;
