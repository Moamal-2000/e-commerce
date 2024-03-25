import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "./HorizontalPoster.module.scss";

const HorizontalPoster = ({ title, description, posterUrl }) => {
  const horPosterRef = useRef();

  useEffect(() => {
    horPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  });

  return (
    <div className={s.HorPoster} ref={horPosterRef}>
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
export default HorizontalPoster;
