import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { updateProductsState } from "../../../Features/productsSlice";
import s from "./CustomNumberInput.module.scss";
import SvgIcon from "./SvgIcon";

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
        onChange={(e) => handleChangeQuantityInput(e)}
        min={MINIMUM_QUANTITY}
        max={MAXIMUM_QUANTITY}
      />

      <div className={s.buttons}>
        <button type="button" onClick={() => handleUpdateQuantity("increase")}>
          <SvgIcon name="arrowUp" />
        </button>

        <button type="button" onClick={() => handleUpdateQuantity("decrease")}>
          <SvgIcon name="arrowUp" />
        </button>
      </div>
    </div>
  );
};
export default CustomNumberInput;
