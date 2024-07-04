import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "src/Features/globalSlice";
import { addToArray } from "src/Features/productsSlice";
import { compareDataToObjValue } from "src/Functions/helper";
import s from "./BuyButton.module.scss";

const BuyButton = () => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const { selectedProduct, productQuantity, cartProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { t } = useTranslation();

  function handleBuyProduct() {
    if (!isSignIn) {
      const alertText = t("toastAlert.pageRequiringSignIn");
      dispatch(showAlert({ alertText, alertState: "warning" }));
      navigateTo("/signup");
      return;
    }

    addToCart();
  }

  function addToCart() {
    const isAlreadyAddedToCart = compareDataToObjValue(
      cartProducts,
      selectedProduct,
      "shortName"
    );

    if (isAlreadyAddedToCart) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.productAlreadyInCart"),
          alertState: "warning",
        })
      );
      return;
    }

    const clonedProduct = { ...selectedProduct };
    clonedProduct.quantity = productQuantity;

    const addAction = addToArray({
      key: "cartProducts",
      value: clonedProduct,
    });

    dispatch(addAction);
  }

  return (
    <button type="button" className={s.buyButton} onClick={handleBuyProduct}>
      {t("buttons.buyNow")}
    </button>
  );
};
export default BuyButton;
