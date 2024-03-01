import { useEffect, useRef } from "react";
import styles from "./MediumPoster.module.scss";

const MediumPoster = ({ title, description, posterUrl }) => {
  const midPosterRef = useRef();

  useEffect(() => {
    midPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  });

  return (
    <div className={styles.midPoster} ref={midPosterRef}>
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
export default MediumPoster;
