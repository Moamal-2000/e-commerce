import ProductColors from "../../Shared/MiniComponents/ProductColors";
import s from "./ProductColorsSection.module.scss";

const ProductColorsSection = ({ data: { colors } }) => {
  const hasColors = colors?.length > 0 && colors;

  if (!hasColors) return null;

  return (
    <section className={s.colors}>
      <span>Colors:</span>
      <ProductColors colors={colors} showToolTip={true} />
    </section>
  );
};
export default ProductColorsSection;
