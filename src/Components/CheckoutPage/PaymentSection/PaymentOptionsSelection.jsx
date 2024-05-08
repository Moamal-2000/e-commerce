import { useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentCards from "./PaymentCards";
import s from "./PaymentOptionsSelection.module.scss";

const PaymentOptionsSelection = () => {
  const [paymentType, setPaymentType] = useState("bank");
  const { t } = useTranslation();

  return (
    <div className={s.paymentOptions}>
      <div className={s.input}>
        <div className={s.wrapper}>
          <input
            type="radio"
            name="payment"
            value="bank"
            id="bank-option"
            checked={paymentType === "bank"}
            onChange={(e) => setPaymentType(e.target.value)}
            aria-checked={paymentType === "bank"}
            aria-labelledby="bank-label"
          />
          <label id="bank-label" htmlFor="bank-option">
            {t("bank")}
          </label>
        </div>

        <PaymentCards />
      </div>

      <div className={s.input}>
        <div className={s.wrapper}>
          <input
            type="radio"
            name="payment"
            value="cash"
            id="cash-option"
            checked={paymentType === "cash"}
            onChange={(e) => setPaymentType(e.target.value)}
            aria-checked={paymentType === "cash"}
            aria-labelledby="cash-label"
          />
          <label id="cash-label" htmlFor="cash-option">
            {t("cashOnDelivery")}
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsSelection;
