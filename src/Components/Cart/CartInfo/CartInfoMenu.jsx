import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSubTotal } from "src/Functions/helper";
import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);
  const { t } = useTranslation();
  const cartInfo = "cartPage.cartInfoMenu";

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

      <Link to="/checkout">{t("buttons.processToCheckout")}</Link>
    </div>
  );
};
export default CartInfoMenu;
