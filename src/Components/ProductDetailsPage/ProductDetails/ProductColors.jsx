import { useState } from "react";
import s from "./ProductColors.module.scss";

const ProductColors = ({ data: { colors } }) => {
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
  const hasColors = colors?.length > 1 && colors;

  function choiceProductColor(e, i) {
    setActiveColorIndex(i);
  }

  if (!hasColors) return null;

  return colors.map(({ color, name }, i) => {
    const firstItemActiveClass = i === activeColorIndex ? s.active : "";

    return (
      <div
        key={"color-" + i}
        className={`${s.color} ${firstItemActiveClass}`}
        style={{ backgroundColor: color }}
        onClick={(e) => choiceProductColor(e, i)}
        title={name + " color"}
      ></div>
    );
  });
};
