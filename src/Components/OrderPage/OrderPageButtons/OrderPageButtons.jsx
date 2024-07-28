import { useDispatch } from "react-redux";
import { CLEAR_ORDER_PRODUCTS } from "src/Data/constants";
import { showAlert, updateAlertState } from "src/Features/alertsSlice";
import s from "./OrderPageButtons.module.scss";

const OrderPageButtons = () => {
  const dispatch = useDispatch();

  function handleReceiveAll() {
    showConfirmAlert();
  }

  function handleCancelAll() {
    showConfirmAlert();
  }

  function showConfirmAlert() {
    dispatch(
      updateAlertState({
        type: "confirm",
        key: "confirmPurpose",
        value: CLEAR_ORDER_PRODUCTS,
      })
    );

    dispatch(
      showAlert({
        alertText: "Are you sure?",
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
