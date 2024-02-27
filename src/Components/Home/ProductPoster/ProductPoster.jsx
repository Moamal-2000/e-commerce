import PostCounter from "./PostCounter";
import styles from "./ProductPoster.module.scss";

const ProductPoster = () => {
  return (
    <section className={styles.productPoster}>
      <div className="content">
        <span>Categories</span>
        <p>Enhance Your Music Experience</p>
        <PostCounter />
        <button type="button">Buy Now!</button>
      </div>
    </section>
  );
};
export default ProductPoster;
