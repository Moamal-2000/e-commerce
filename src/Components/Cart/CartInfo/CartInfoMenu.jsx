import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "src/Features/globalSlice";
import { getSubTotal } from "src/Functions/helper";
import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);
  const { t } = useTranslation();
  const cartInfo = "cartPage.cartInfoMenu";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function handleCheckoutBtn() {
    const isThereAnyCartItem = cartProducts.length > 0;

    if (isThereAnyCartItem) navigateTo("/checkout");
    else showEmptyCartAlert();
  }

  function showEmptyCartAlert() {
    const alertText = t("toastAlert.cartEmpty");
    const alertState = "warning";
    dispatch(showAlert({ alertText, alertState }));
  }

  return (
    <div className={s.menu}>
      <b>{t(`${cartInfo}.cartTotal`)}</b>

      <div className={s.content}>
        <div className={s.item}>
          <span>{t(`${cartInfo}.subTotal`)}:</span>
          <span>${subTotal}</span>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.shipping`)}:</span>
          <span>{t(`${cartInfo}.free`)}</span>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.total`)}:</span>
          <span>${subTotal}</span>
        </div>
      </div>

      <button type="button" onClick={handleCheckoutBtn}>
        {t("buttons.processToCheckout")}
      </button>
    </div>
  );
};
export default CartInfoMenu;
