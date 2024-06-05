import { useState } from "react";
import ToolTip from "../ToolTip";
import s from "./ProductColors.module.scss";

const ProductColors = ({ colors, showToolTip = false }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  function choiceProductColor(i) {
    setActiveColorIndex(i);
  }

  return colors.map(({ color, name }, i) => {
    const firstItemActiveClass = i === activeColorIndex ? s.active : "";

    return (
      <button
        type="button"
        key={"color-" + i}
        className={`${s.color} ${firstItemActiveClass}`}
        style={{ backgroundColor: color, border: `solid 3px ${color}` }}
        onClick={() => choiceProductColor(i)}
        aria-label={name + " color"}
      >
        {showToolTip && (
          <ToolTip left="50%" top="40px" content={name + " color"} />
        )}
      </button>
    );
  });
};

export default ProductColors;
