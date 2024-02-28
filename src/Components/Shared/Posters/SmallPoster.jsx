import styles from "./SmallPoster.module.scss";

const SmallPoster = ({ title, description, posterUrl }) => {
  return (
    <div className={styles.smallPoster}>
      <img src={posterUrl} alt="product's poster" />
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
export default SmallPoster;
