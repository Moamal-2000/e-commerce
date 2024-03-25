import { Link } from "react-router-dom";
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
        <Link to="/products">Buy Now!</Link>
      </div>

      <div className={s.productHolder}>
        <img src={stereo} alt="Stereo" />
      </div>
    </section>
  );
};
export default ProductPoster;
