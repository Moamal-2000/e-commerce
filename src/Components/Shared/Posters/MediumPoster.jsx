import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/products" className={s.shopNow}>
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default MediumPoster;
