import { stereo } from "../../../Assets/Images/Images";
import PostCounter from "./PostCounter";
import styles from "./ProductPoster.module.scss";

const ProductPoster = () => {
  return (
    <section className={styles.productPoster}>
      <div className={styles.content}>
        <span>Categories</span>
        <p>Enhance Your Music Experience</p>
        <PostCounter />
        <button type="button">Buy Now!</button>
      </div>

      <div className={styles.productHolder}>
        <img src={stereo} alt="Stereo" />
      </div>
    </section>
  );
};
export default ProductPoster;
