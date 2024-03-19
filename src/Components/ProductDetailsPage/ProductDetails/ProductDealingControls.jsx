import { useState } from "react";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./ProductDealingControls.module.scss";

const ProductDealingControls = () => {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prevNumber) => +prevNumber + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevNumber) => +prevNumber - 1);
  }

  return (
    <section className={s.dealing}>
      <div className={s.customNumberInput}>
        <button onClick={decreaseQuantity} type="button">
          <label htmlFor="quantity-input">-</label>
        </button>

        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={1}
          max={1000}
          id="quantity-input"
        />

        <button onClick={increaseQuantity} type="button">
          <label htmlFor="quantity-input">+</label>
        </button>
      </div>

      <button type="button">Buy Now</button>
      <div className={s.addToFav}>
        <SvgIcon name="heart" />
      </div>
    </section>
  );
};
export default ProductDealingControls;
