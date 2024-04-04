import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToArray, removeByKeyName } from "src/Features/productsSlice";
import { isItemFound } from "src/Functions/helper";
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

  function handleCartButton() {
    if (!loginInfo.isSignIn) {
      navigateTo("/signup");
      return;
    }
    isProductAlreadyExist ? removeFromCart() : addToCart();
  }

  function addToCart() {
    const addAction = addToArray({ key: "cartProducts", value: product });
    dispatch(addAction);
    setIconName("trashCan");
  }

  function removeFromCart() {
    const removeAction = removeByKeyName({
      dataKey: "cartProducts",
      itemKey: "shortName",
      keyValue: product.shortName,
    });

    dispatch(removeAction);
    setIconName("cart3");
  }

  return (
    <button
      type="button"
      className={`${s.addToCartBtn} ${s.addToCartButton}`}
      onClick={handleCartButton}
      aria-label={buttonText}
      data-add-to-cart-button
    >
      <SvgIcon name={iconNameState} />
      <span>{buttonText}</span>
    </button>
  );
};
export default AddToCartButton;
