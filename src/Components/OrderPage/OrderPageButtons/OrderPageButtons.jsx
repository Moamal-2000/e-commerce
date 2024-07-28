import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { CLEAR_ORDER_PRODUCTS } from "src/Data/constants";
import { showAlert, updateAlertState } from "src/Features/alertsSlice";
import s from "./OrderPageButtons.module.scss";

const OrderPageButtons = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();


  function handleReceiveAll() {
    showConfirmAlert(t("toastAlert.receivedAllOrder"));
  }

  function handleCancelAll() {
    showConfirmAlert(t("toastAlert.cancelAllOrder"));
  }

  function showConfirmAlert(alertText) {
    dispatch(
      updateAlertState({
        type: "confirm",
        key: "confirmPurpose",
        value: CLEAR_ORDER_PRODUCTS,
      })
    );

    dispatch(
      showAlert({
        alertText,
        alertState: "warning",
        alertType: "confirm",
      })
    );
  }

  return (
    <div className={s.buttons}>
      <button type="button" onClick={handleReceiveAll}>
        Confirm receive all
      </button>
      <button type="button" onClick={handleCancelAll}>
        Cancel all
      </button>
    </div>
  );
};
export default OrderPageButtons;
