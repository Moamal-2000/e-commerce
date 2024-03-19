import s from "./SmallPoster.module.scss";

const SmallPoster = ({ title, description, posterUrl }) => {
  return (
    <div className={s.smallPoster}>
      <img src={posterUrl} alt="product's poster" loading="lazy" />
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
        <a href="\#" className={s.shopNow}>
          Shop Now
        </a>
      </div>
    </div>
  );
};
export default SmallPoster;
