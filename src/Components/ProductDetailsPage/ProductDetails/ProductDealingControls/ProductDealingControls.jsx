import { useState } from "react";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import AddToFavButton from "./AddToFavButton/AddToFavButton";
import BuyButton from "./BuyButton/BuyButton";
import s from "./ProductDealingControls.module.scss";

const ProductDealingControls = ({ productData }) => {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    if (quantity >= MAXIMUM_QUANTITY) return;
    setQuantity((prevNumber) => +prevNumber + 1);
  }

  function decreaseQuantity() {
    if (quantity <= MINIMUM_QUANTITY) return;
    setQuantity((prevNumber) => +prevNumber - 1);
  }

  return (
    <section className={s.dealing}>
      <div className={s.customNumberInput}>
        <button
          type="button"
          onClick={decreaseQuantity}
          aria-label="Decrease quantity by 1"
        >
          -
        </button>

        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={1}
          max={1000}
        />

        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity by 1"
        >
          +
        </button>
      </div>

      <div className={s.wrapper}>
        <BuyButton />
        <AddToFavButton productData={productData} />
      </div>
    </section>
  );
};
export default ProductDealingControls;
