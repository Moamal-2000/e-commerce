import { stereo } from "../../../Assets/Images/Images";
import PostCounter from "./PostCounter";
import s from "./ProductPoster.module.scss";

const ProductPoster = () => {
  return (
    <section className={s.productPoster}>
      <div className={s.content}>
        <span>Categories</span>
        <p>Enhance Your Music Experience</p>
        <PostCounter />
        <button type="button">Buy Now!</button>
      </div>

      <div className={s.productHolder}>
        <img src={stereo} alt="Stereo" loading="lazy" />
      </div>
    </section>
  );
};
export default ProductPoster;
