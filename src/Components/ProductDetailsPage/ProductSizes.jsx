import s from "./ProductSizes.module.scss";

const ProductSizes = () => {
  return (
    <section className={s.sizes}>
      <span>Size:</span>

      <div className={s.sizesWrapper}>
        <div className={s.size}>XL</div>
        <div className={s.size}>S</div>
        <div className={`${s.size} ${s.active}`}>M</div>
        <div className={s.size}>L</div>
        <div className={s.size}>XL</div>
      </div>
    </section>
  );
};
export default ProductSizes;
