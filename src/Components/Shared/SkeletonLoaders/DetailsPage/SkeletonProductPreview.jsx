import s from "./SkeletonProductPreview.module.scss";

const SkeletonProductPreview = () => {
  return (
    <section className={s.images}>
      <div className={s.otherImages}>
        <div className={s.image}></div>
        <div className={s.image}></div>
        <div className={s.image}></div>
        <div className={s.image}></div>
      </div>

      <div className={s.previewImgHolder}></div>
    </section>
  );
};
export default SkeletonProductPreview;
