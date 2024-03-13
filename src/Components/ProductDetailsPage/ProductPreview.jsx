import s from "./ProductPreview.module.scss";

const ProductPreview = ({ data }) => {
  const { img, name } = data;

  return (
    <section className={s.images}>
      <div className={s.otherImages}>
        {/* <img src={joystickThumbnail1} alt="" /> */}
      </div>

      <div className={s.previewImgHolder}>
        <img src={img} alt={name} />
      </div>
    </section>
  );
};
export default ProductPreview;
