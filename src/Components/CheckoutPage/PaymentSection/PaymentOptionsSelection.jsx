import { useState } from "react";
import PaymentCards from "./PaymentCards";
import s from "./PaymentOptionsSelection.module.scss";

const PaymentOptionsSelection = () => {
  const [paymentType, setPaymentType] = useState("bank");

  return (
    <div className={s.paymentOptions}>
      <div className={s.input}>
        <div className={s.wrapper}>
          <input
            type="radio"
            name="payment"
            id="bank-option"
            value="bank"
            checked
            onChange={(e) => setPaymentType(e.target.value)}
          />
          <label htmlFor="bank-option">Bank</label>
        </div>

        <PaymentCards />
      </div>

      <div className={s.input}>
        <div className={s.wrapper}>
          <input
            type="radio"
            name="payment"
            id="cash-option"
            value="cash"
            onChange={(e) => setPaymentType(e.target.value)}
          />
          <label htmlFor="cash-option">Cash on delivery</label>
        </div>
      </div>
    </div>
  );
};
export default PaymentOptionsSelection;
