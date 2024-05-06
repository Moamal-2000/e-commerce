import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { updateProductsState } from "src/Features/productsSlice";
import SvgIcon from "../SvgIcon";
import s from "./CustomNumberInput.module.scss";

const CustomNumberInput = ({ product, quantity }) => {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleUpdateQuantity(state) {
    const isDecrease = state === "decrease";
    const updatedProduct = { ...product };
    const isBelowMinimum = quantity <= MINIMUM_QUANTITY && isDecrease;
    const isAboveMaximum = quantity >= MAXIMUM_QUANTITY && !isDecrease;

    if (isBelowMinimum || isAboveMaximum) return;

    updatedProduct.quantity += isDecrease ? -1 : 1;
    updateProductQuantity(updatedProduct);
  }

  function handleChangeQuantityInput(e) {
    const inputValue = parseInt(e.target.value);
    const updatedProduct = { ...product };

    if (isNaN(inputValue)) return;

    const isBelowMinimum = inputValue < MINIMUM_QUANTITY;
    const isAboveMaximum = inputValue > MAXIMUM_QUANTITY;

    if (isBelowMinimum) {
      updatedProduct.quantity = MINIMUM_QUANTITY;
    } else if (isAboveMaximum) {
      updatedProduct.quantity = MAXIMUM_QUANTITY;
    } else {
      updatedProduct.quantity = inputValue;
    }

    updateProductQuantity(updatedProduct);
    return updatedProduct.quantity;
  }

  function updateProductQuantity(updatedProduct) {
    const indexToUpdate = cartProducts.findIndex(
      (item) => item.id == updatedProduct.id
    );

    if (indexToUpdate === -1) return;

    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[indexToUpdate] = updatedProduct;

    dispatch(
      updateProductsState({
        key: "cartProducts",
        value: updatedCartProducts,
      })
    );
  }

  return (
    <div className={s.numberInput}>
      <input
        type="number"
        value={quantity}
        placeholder="0"
        onChange={(e) => handleChangeQuantityInput(e)}
        min={MINIMUM_QUANTITY}
        max={MAXIMUM_QUANTITY}
      />

      <div className={s.buttons}>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => handleUpdateQuantity("increase")}
          tabIndex="-1"
        >
          <SvgIcon name="arrowUp" />
        </button>

        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => handleUpdateQuantity("decrease")}
          tabIndex="-1"
        >
          <SvgIcon name="arrowUp" />
        </button>
      </div>
    </div>
  );
};
export default CustomNumberInput;
