import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "src/Features/alertsSlice";
import { getSubTotal } from "src/Functions/helper";
import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);
  const { t } = useTranslation();
  const cartInfo = "cartPage.cartInfoMenu";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={s.menu} role="region" aria-labelledby="cart-summary">
      <b>{t(`${cartInfo}.cartTotal`)}</b>

      <div className={s.content}>
        <div className={s.item}>
          <span>{t(`${cartInfo}.subTotal`)}:</span>
          <span aria-label={`Subtotal ${subTotal}`}>${subTotal}</span>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.shipping`)}:</span>
          <span aria-label={t(`${cartInfo}.free`)}>
            {t(`${cartInfo}.free`)}
          </span>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.total`)}:</span>
          <span aria-label={`Total ${subTotal}`}>${subTotal}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleCheckoutBtn(cartProducts, navigateTo, dispatch, t)}
      >
        {t("buttons.processToCheckout")}
      </button>
    </div>
  );
};
export default CartInfoMenu;

function handleCheckoutBtn(cartProducts, navigateTo, dispatch, t) {
  const isThereAnyCartItem = cartProducts.length > 0;

  if (isThereAnyCartItem) navigateTo("/checkout");
  else showEmptyCartAlert(dispatch, t);
}

function showEmptyCartAlert(dispatch, t) {
  const alertText = t("toastAlert.cartEmpty");
  const alertState = "warning";
  dispatch(showAlert({ alertText, alertState, alertType: "alert" }));
}
