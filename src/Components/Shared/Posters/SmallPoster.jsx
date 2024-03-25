import { Link } from "react-router-dom";
import s from "./SmallPoster.module.scss";

const SmallPoster = ({ title, description, posterUrl }) => {
  return (
    <div className={s.smallPoster}>
      <img src={posterUrl} alt="product's poster" />
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
        <Link to="/products" className={s.shopNow}>
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default SmallPoster;
