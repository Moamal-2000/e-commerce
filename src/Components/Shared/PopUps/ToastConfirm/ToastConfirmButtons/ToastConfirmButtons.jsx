import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ORDER_PRODUCTS, REMOVE_ORDER_PRODUCT } from "src/Data/constants";
import { updateAlertState } from "src/Features/alertsSlice";
import { removeByKeyName, setEmptyArrays } from "src/Features/productsSlice";
import s from "./ToastConfirmButtons.module.scss";

const ToastConfirmButtons = () => {
  const { confirmPurpose } = useSelector((state) => state.alerts.confirm);
  const { removeOrderProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleConfirm() {
    switch (confirmPurpose) {
      case REMOVE_ORDER_PRODUCT:
        removeFromOrder(dispatch, removeOrderProduct);
        break;
      case CLEAR_ORDER_PRODUCTS:
        removeAllOrder(dispatch);
        break;
    }

    closeConfirmToast();
  }

  function closeConfirmToast() {
    dispatch(
      updateAlertState({ key: "isAlertActive", value: false, type: "confirm" })
    );
  }

  return (
    <div className={s.buttons}>
      <button type="button" onClick={handleConfirm}>
        {t("common.confirm")}
      </button>
      <button type="button" onClick={closeConfirmToast}>
        {t("common.cancel")}
      </button>
    </div>
  );
};
export default ToastConfirmButtons;

function removeFromOrder(dispatch, removeOrderProduct) {
  dispatch(
    removeByKeyName({
      dataKey: "orderProducts",
      itemKey: "shortName",
      keyValue: removeOrderProduct,
    })
  );
}

function removeAllOrder(dispatch) {
  dispatch(setEmptyArrays({ keys: ["orderProducts"] }));
}
