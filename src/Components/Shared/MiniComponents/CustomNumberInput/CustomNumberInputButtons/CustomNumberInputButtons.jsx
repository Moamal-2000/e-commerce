import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { updateProductsState } from "src/Features/productsSlice";
import SvgIcon from "../../SvgIcon";
import s from "./CustomNumberInputButtons.module.scss";

const CustomNumberInputButtons = ({ product, quantity }) => {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleUpdateQuantity(state) {
    const isDecrease = state === "decrease";
    const updatedProduct = { ...product };
    const isBelowMinimum = quantity <= MINIMUM_QUANTITY && isDecrease;
    const isAboveMaximum = quantity >= MAXIMUM_QUANTITY && !isDecrease;

    if (isBelowMinimum || isAboveMaximum) return;

    updatedProduct.quantity += isDecrease ? -1 : 1;
    updateProductQuantity(updatedProduct, cartProducts, dispatch);
  }

  return (
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
  );
};
export default CustomNumberInputButtons;

export function updateProductQuantity(updatedProduct, cartProducts, dispatch) {
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
