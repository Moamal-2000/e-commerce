import { useState } from "react";
import s from "./ProductColors.module.scss";

const ProductColors = ({ data }) => {
  const colors = [
    {
      name: "light-blue",
      color: "#a0bce0",
    },
    {
      name: "light-red",
      color: "#e07575",
    },
  ];

  return (
    <section className={s.colors}>
      <span>Colours:</span>
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

  return colors.map(({ color }, i) => {
    const firstItemActiveClass = i === activeColorIndex ? s.active : "";

    return (
      <div
        key={"color-" + i}
        className={`${s.color} ${firstItemActiveClass}`}
        style={{ backgroundColor: color }}
        onClick={(e) => choiceProductColor(e, i)}
      ></div>
    );
  });
};
