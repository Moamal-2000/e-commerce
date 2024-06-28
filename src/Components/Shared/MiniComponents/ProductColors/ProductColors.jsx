import { useState } from "react";
import ToolTip from "../ToolTip";
import s from "./ProductColors.module.scss";

const ProductColors = ({ colors, showToolTip = false }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  function choiceProductColor(index) {
    setActiveColorIndex(index);
  }

  return colors.map(({ color, name }, index) => {
    const firstItemActiveClass = index === activeColorIndex ? s.active : "";
    const styles = { backgroundColor: color, border: `solid 3px ${color}` };

    return (
      <button
        type="button"
        key={"color-" + index}
        className={`${s.color} ${firstItemActiveClass}`}
        style={styles}
        onClick={() => choiceProductColor(index)}
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
