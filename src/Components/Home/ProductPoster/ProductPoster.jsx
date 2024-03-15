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
        <img src={stereo} alt="Stereo" />
      </div>
    </section>
  );
};
export default ProductPoster;


let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, current) => {
  if (current % 2 === 1) {
    console.log(current);
    return acc + current;
  } else {
    console.log(acc);
    console.log(current);
    return acc * current;
  }
}, 1); 

console.log(result); // 500