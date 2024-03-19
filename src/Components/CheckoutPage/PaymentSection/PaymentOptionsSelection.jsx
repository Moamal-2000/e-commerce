import PaymentCards from "./PaymentCards";
import s from "./PaymentOptionsSelection.module.scss";

const PaymentOptionsSelection = () => {
  return (
    <div className={s.paymentOptions}>
      <div className={s.input}>
        <div className={s.wrapper}>
          <input type="radio" name="payment" id="bank-option" />
          <label htmlFor="bank-option">Bank</label>
        </div>

        <PaymentCards />
      </div>

      <div className={s.input}>
        <div className={s.wrapper}>
          <input type="radio" name="payment" id="cash-option" checked />
          <label htmlFor="cash-option">Cash on delivery</label>
        </div>
      </div>
    </div>
  );
};
export default PaymentOptionsSelection;
