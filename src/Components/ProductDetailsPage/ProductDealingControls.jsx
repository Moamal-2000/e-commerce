import { useEffect, useState } from "react";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./ProductDealingControls.module.scss";

const ProductDealingControls = () => {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prevNumber) => +prevNumber + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevNumber) => +prevNumber - 1);
  }

  return (
    <section className={styles.dealing}>
      <div className={styles.customNumberInput}>
        <button onClick={decreaseQuantity} type="button">
          -
        </button>

        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={1}
          max={1000}
        />

        <button onClick={increaseQuantity} type="button">
          +
        </button>
      </div>

      <button type="button">Buy Now</button>
      <div className={styles.addToFav}>
        <SvgIcon name="heart" />
      </div>
    </section>
  );
};
export default ProductDealingControls;
