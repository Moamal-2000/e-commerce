import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./ProductDealingControls.module.scss";

const ProductDealingControls = () => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prevNumber) => +prevNumber + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevNumber) => +prevNumber - 1);
  }

  function handleBuyProduct() {
    if (!isSignIn) navigateTo("/signup");
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

      <div className={s.wrapper}>
        <button
          type="button"
          className={s.buyButton}
          onClick={handleBuyProduct}
        >
          Buy Now
        </button>

        <button
          type="button"
          className={s.addToFav}
          aria-label="Add to favorite"
        >
          <SvgIcon name="heart" />
          <ToolTip left="50%" top="60px" content="Add to favorite" />
        </button>
      </div>
    </section>
  );
};
export default ProductDealingControls;
