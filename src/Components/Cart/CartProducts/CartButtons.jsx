import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./CartButtons.module.scss";

const CartButtons = () => {
  const { t } = useTranslation();

  function updateCart() {}

  return (
    <div className={s.buttons}>
      <Link to="/products">{t("buttons.returnToShop")}</Link>

      <button type="button" onClick={updateCart}>
        {t("buttons.updateCart")}
      </button>
    </div>
  );
};
export default CartButtons;
