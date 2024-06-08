import { useTranslation } from "react-i18next";
import s from "./AddCoupon.module.scss";

const AddCoupon = () => {
  const { t } = useTranslation();

  return (
    <div className={s.couponContainer}>
      <input
        type="text"
        placeholder={t("inputsPlaceholders.couponExample")}
        aria-required="false"
      />
      <button type="button">{t("buttons.applyCoupon")}</button>
    </div>
  );
};
export default AddCoupon;
