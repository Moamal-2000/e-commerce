import { useRef } from "react";
import { useTranslation } from "react-i18next";
import s from "./AddCoupon.module.scss";

const AddCoupon = () => {
  const couponInputRef = useRef("");
  const { t } = useTranslation();

  return (
    <div className={s.couponContainer}>
      <input
        type="text"
        placeholder={t("inputsPlaceholders.couponExample")}
        onChange={(e) => (couponInputRef.current = e.target.value)}
      />

      <button type="button">{t("buttons.applyCoupon")}</button>
    </div>
  );
};
export default AddCoupon;
