import { useEffect, useRef } from "react";
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
        <button type="button" className={s.shopNow}>
          <a href="\#">Shop Now</a>
        </button>
      </div>
    </div>
  );
};
export default HorizontalPoster;
