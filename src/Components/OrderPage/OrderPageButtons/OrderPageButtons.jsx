import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ORDER_PRODUCTS } from "src/Data/constants";
import { showAlert, updateAlertState } from "src/Features/alertsSlice";
import useUpdateEffect from "src/Hooks/Helper/useUpdateEffect";
import s from "./OrderPageButtons.module.scss";

const OrderPageButtons = () => {
  const { isAlertActive, confirmPurpose } = useSelector(
    (state) => state.alerts.confirm
  );
  const { orderProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const alertMsgKey = useRef("");

  function handleReceiveAll() {
    alertMsgKey.current = "receivedAllOrder";
    showConfirmAlert(t(`toastAlert.${alertMsgKey.current}`));
  }

  function handleCancelAll() {
    alertMsgKey.current = "cancelAllOrder";
    showConfirmAlert(t(`toastAlert.${alertMsgKey.current}`));
  }

  function showConfirmAlert(alertText) {
    if (!orderProducts.length) return;

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

  useUpdateEffect(() => {
    if (!isAlertActive) return;
    const isRemoveOrderProduct = confirmPurpose === CLEAR_ORDER_PRODUCTS;

    if (isRemoveOrderProduct)
      showConfirmAlert(t(`toastAlert.${alertMsgKey.current}`));
  }, [i18n.language]);

  return (
    <div className={s.buttons}>
      <button type="button" onClick={handleReceiveAll}>
        {t("buttons.confirmReceiveAll")}
      </button>

      <button type="button" onClick={handleCancelAll}>
        {t("buttons.cancelAll")}
      </button>
    </div>
  );
};
export default OrderPageButtons;
