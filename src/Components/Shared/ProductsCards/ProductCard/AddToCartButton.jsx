import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { addToArray, removeByKeyName } from "src/Features/productsSlice";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AddToCartButton.module.scss";

const AddToCartButton = ({ product }) => {
  const { t } = useTranslation();
  const { cartProducts } = useSelector((state) => state.products);
  const { loginInfo } = useSelector((state) => state.user);
  const isProductAlreadyExist = isItemFound(cartProducts, product, "shortName");
  const iconName = isProductAlreadyExist ? "trashCan" : "cart3";
  const [iconNameState, setIconName] = useState(iconName);
  const dispatch = useDispatch();
  const buttonText = t(
    `productCard.buttonText.${
      isProductAlreadyExist ? "removeFromCart" : "addToCart"
    }`
  );

  function handleCartButton() {
    if (!loginInfo.isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToCart"),
          alertState: "warning",
        })
      );

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
