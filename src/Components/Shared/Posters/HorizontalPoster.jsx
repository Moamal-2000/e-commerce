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
        <a href="\#" className={s.shopNow}>
          Shop Now
        </a>
      </div>
    </div>
  );
};
export default HorizontalPoster;
