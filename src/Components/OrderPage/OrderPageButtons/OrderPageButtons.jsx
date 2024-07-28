import { useDispatch } from "react-redux";
import { setEmptyArrays } from "../../../Features/productsSlice";
import s from "./OrderPageButtons.module.scss";
import { showAlert } from "../../../Features/alertsSlice";

const OrderPageButtons = () => {
  const dispatch = useDispatch()

  function handleReceiveAll() {
    showConfirmAlert()
  }

  function handleCancelAll() {}

  function showConfirmAlert() {
    dispatch(
      showAlert({
        alertText: "Are you sure?",
        alertState: "warning",
        alertType: "confirm",
      })
    );

    // dispatch(
    //   setEmptyArrays({ keys: {"orderProducts"} })
    // );
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
