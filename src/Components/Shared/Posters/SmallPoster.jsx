import s from "./SmallPoster.module.scss";

const SmallPoster = ({ title, description, posterUrl }) => {
  return (
    <div className={s.smallPoster}>
      <img src={posterUrl} alt="product's poster" />
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
        <button type="button" className={s.shopNow}>
          <a href="\#">Shop Now</a>
        </button>
      </div>
    </div>
  );
};
export default SmallPoster;
