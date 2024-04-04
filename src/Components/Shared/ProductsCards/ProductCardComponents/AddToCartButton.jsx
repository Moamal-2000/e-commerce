import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToArray,
  removeByKeyName,
} from "../../../../Features/productsSlice";
import { isItemFound } from "../../../../Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AddToCartButton.module.scss";

const AddToCartButton = ({ product }) => {
  const { cartProducts } = useSelector((state) => state.products);
  const { loginInfo } = useSelector((state) => state.user);
  const isProductAlreadyExist = isItemFound(cartProducts, product, "shortName");
  const iconName = isProductAlreadyExist ? "trashCan" : "cart3";
  const buttonText = isProductAlreadyExist ? "Remove from cart" : "Add to cart";
  const [iconNameState, setIconName] = useState(iconName);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function addProductToCart() {
    if (!loginInfo.isSignIn) {
      navigateTo("/signup");
      return;
    }

    if (isProductAlreadyExist) {
      const removeAction = removeByKeyName({
        dataKey: "cartProducts",
        itemKey: "shortName",
        keyValue: product.shortName,
      });

      dispatch(removeAction);
      setIconName("cart3");
      return;
    }

    const addAction = addToArray({ key: "cartProducts", value: product });
    dispatch(addAction);
    setIconName("trashCan");
  }

  return (
    <button
      type="button"
      className={`${s.addToCartBtn} ${s.addToCartButton}`}
      onClick={addProductToCart}
      aria-label={buttonText}
      data-add-to-cart-button
    >
      <SvgIcon name={iconNameState} />
      <span>{buttonText}</span>
    </button>
  );
};
export default AddToCartButton;
