import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import { removeByKeyName } from "src/Features/productsSlice";
import s from "./ToastConfirmButtons.module.scss";

const ToastConfirmButtons = () => {
  const { removeOrderProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function closeConfirmToast() {
    dispatch(updateGlobalState({ key: "isToastConfirmActive", value: false }));
  }

  function removeFromOrder() {
    dispatch(
      removeByKeyName({
        dataKey: "orderProducts",
        itemKey: "shortName",
        keyValue: removeOrderProduct,
      })
    );
  }

  function handleConfirm() {
    removeFromOrder();
    closeConfirmToast();
  }

  function handleCancel() {
    closeConfirmToast();
  }

  return (
    <div className={s.buttons}>
      <button type="button" onClick={handleConfirm}>
        Confirm
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};
export default ToastConfirmButtons;
