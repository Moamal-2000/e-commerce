import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
  const { t } = useTranslation();

  function handleBuyProduct() {
    const isAlreadyAddedToCart = compareDataToObjValue(
      cartProducts,
      selectedProduct,
      "shortName"
    );

    if (!isSignIn) {
      showWarning("pageRequiringSignIn");
      return;
    }

    if (isAlreadyAddedToCart) {
      showWarning("productAlreadyInCart");
      return;
    }

    addToCart();
  }

  function addToCart() {
    const clonedProduct = { ...selectedProduct };
    clonedProduct.quantity = productQuantity;

    const addAction = addToArray({
      key: "cartProducts",
      value: clonedProduct,
    });

    dispatch(addAction);
  }

  function showWarning(translateKey) {
    dispatch(
      showAlert({
        alertText: t(`toastAlert.${translateKey}`),
        alertState: "warning",
      })
    );
  }

  return (
    <button type="button" className={s.buyButton} onClick={handleBuyProduct}>
      {t("buttons.buyNow")}
    </button>
  );
};
export default BuyButton;
