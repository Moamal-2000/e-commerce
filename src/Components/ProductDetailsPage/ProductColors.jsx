import s from "./ProductColors.module.scss";

const ProductColors = ({ data }) => {
  return (
    <section className={s.colors}>
      <span>Colours:</span>
      <div
        className={`${s.color} ${s.active}`}
        style={{ backgroundColor: "#a0bce0" }}
      ></div>

      <div className={s.color} style={{ backgroundColor: "#e07575" }}></div>
    </section>
  );
};
export default ProductColors;
