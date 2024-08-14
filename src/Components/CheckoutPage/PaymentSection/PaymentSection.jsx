import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AddCoupon from "../../Cart/CartInfo/AddCoupon";
import PaymentCalculation from "./PaymentCalculation";
import PaymentOptionsSelection from "./PaymentOptionsSelection";
import PaymentProducts from "./PaymentProducts";
import s from "./PaymentSection.module.scss";

const PaymentSection = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const { t } = useTranslation();

  return (
    <section className={s.paymentSection}>
      <PaymentProducts products={cartProducts} />
      <PaymentCalculation />
      <PaymentOptionsSelection />
      <AddCoupon />

      <button type="submit" className={s.submitPaymentButton}>
        {t("buttons.placeOrder")}
      </button>
    </section>
  );
};
export default PaymentSection;
