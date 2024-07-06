import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import { removeByKeyName } from "../../../../Features/productsSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./ToastConfirm.module.scss";

const ToastConfirm = () => {
  const {
    isToastConfirmActive,
    toastConfirmText,
    toastConfirmState,
  } = useSelector((state) => state.global);
  const { removeOrderProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { iconName, className } = toastState[toastConfirmState];
  const showClass = isToastConfirmActive ? s.show : "";

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
    <div className={`${s.toastConfirm} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir="ltr">{toastConfirmText}</p>

      <div className={s.buttons}>
        <button type="button" onClick={handleConfirm}>
          Confirm
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ToastConfirm;

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};
