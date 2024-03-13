import { useEffect, useRef } from "react";
import s from "./MediumPoster.module.scss";

const MediumPoster = ({ title, description, posterUrl }) => {
  const midPosterRef = useRef();

  useEffect(() => {
    midPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  });

  return (
    <div className={s.midPoster} ref={midPosterRef}>
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
export default MediumPoster;
