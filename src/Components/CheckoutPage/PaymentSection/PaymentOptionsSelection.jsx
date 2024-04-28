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
            id="bank-option"
            value="bank"
            checked
            onChange={(e) => setPaymentType(e.target.value)}
          />
          <label htmlFor="bank-option">{t("bank")}</label>
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
          <label htmlFor="cash-option">{t("cashOnDelivery")}</label>
        </div>
      </div>
    </div>
  );
};
export default PaymentOptionsSelection;
