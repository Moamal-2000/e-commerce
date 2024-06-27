import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "src/Features/globalSlice";
import s from "./BuyButton.module.scss";

const BuyButton = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { t } = useTranslation();

  function handleBuyProduct() {
    if (loginInfo.isSignIn) return;

    const alertText = t("toastAlert.pageRequiringSignIn");
    dispatch(showAlert({ alertText, alertState: "warning" }));
    navigateTo("/signup");
  }

  return (
    <button type="button" className={s.buyButton} onClick={handleBuyProduct}>
      {t("buttons.buyNow")}
    </button>
  );
};
export default BuyButton;
