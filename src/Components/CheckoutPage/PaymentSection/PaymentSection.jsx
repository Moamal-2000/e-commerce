import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { transferData } from "src/Features/productsSlice";
import AddCoupon from "../../Cart/CartInfo/AddCoupon";
import PaymentCalculation from "./PaymentCalculation";
import PaymentOptionsSelection from "./PaymentOptionsSelection";
import PaymentProducts from "./PaymentProducts";
import s from "./PaymentSection.module.scss";

const PaymentSection = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleOrderProducts() {
    dispatch(transferData({ from: "cartProducts", to: "orderProducts" }));
  }

  return (
    <section className={s.paymentSection}>
      <PaymentProducts data={cartProducts} />
      <PaymentCalculation />
      <PaymentOptionsSelection />
      <AddCoupon />

      <button
        type="submit"
        className={s.submitPaymentButton}
        onClick={handleOrderProducts}
      >
        {t("buttons.placeOrder")}
      </button>
    </section>
  );
};
export default PaymentSection;
