import { useEffect, useRef } from "react";
import styles from "./HorizontalPoster.module.scss";

const HorizontalPoster = ({ title, description, posterUrl }) => {
  const horPosterRef = useRef();

  useEffect(() => {
    horPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  });

  return (
    <div className={styles.HorPoster} ref={horPosterRef}>
      <div className={styles.content}>
        <b>{title}</b>
        <p>{description}</p>
        <button type="button" className={styles.shopNow}>
          <a href="\#">Shop Now</a>
        </button>
      </div>
    </div>
  );
};
export default HorizontalPoster;
