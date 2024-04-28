import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getSubTotal } from "src/Functions/helper";
import s from "./PaymentCalculation.module.scss";

const PaymentCalculation = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);
  const { t } = useTranslation();
  const cartInfo = "cartPage.cartInfoMenu";

  return (
    <div className={s.calculationInfo}>
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
  );
};
export default PaymentCalculation;
