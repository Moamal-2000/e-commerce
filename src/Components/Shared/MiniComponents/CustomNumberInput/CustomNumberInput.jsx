import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import s from "./CustomNumberInput.module.scss";
import CustomNumberInputButtons, {
  updateProductQuantity,
} from "./CustomNumberInputButtons/CustomNumberInputButtons";

const CustomNumberInput = ({ product, quantity }) => {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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

    updateProductQuantity(updatedProduct, cartProducts, dispatch);
    return updatedProduct.quantity;
  }

  return (
    <div className={s.numberInput}>
      <input
        type="number"
        value={quantity}
        placeholder="0"
        onChange={handleChangeQuantityInput}
        min={MINIMUM_QUANTITY}
        max={MAXIMUM_QUANTITY}
      />

      <CustomNumberInputButtons product={product} quantity={quantity} />
    </div>
  );
};
export default CustomNumberInput;
