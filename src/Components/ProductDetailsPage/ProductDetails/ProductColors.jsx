import { useState } from "react";
import s from "./ProductColors.module.scss";
import ToolTip from "../../Shared/MiniComponents/ToolTip";

const ProductColors = ({ data: { colors } }) => {
  const hasColors = colors?.length > 0 && colors;

  if (!hasColors) return null;

  return (
    <section className={s.colors}>
      <span>Colors:</span>
      <Colors colors={colors} />
    </section>
  );
};
export default ProductColors;

const Colors = ({ colors }) => {
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
        <ToolTip left="50%" top="40px" content={name + " color"} />
      </div>
    );
  });
};
