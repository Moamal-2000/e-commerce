import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOAST_ALERT_DURATION_MS } from "src/Data/globalVariables";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./ToastConfirm.module.scss";

const ToastConfirm = () => {
  const {
    numberOfShowedAlerts,
    isToastConfirmActive,
    toastConfirmText,
    toastConfirmState,
  } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { iconName, className } = toastState[toastConfirmState];
  const showClass = isToastConfirmActive ? s.show : "";
  let timerId;

  function setToastConfirmTimeout() {
    if (!showClass) return;

    timerId = setTimeout(() => {
      dispatch(
        updateGlobalState({ key: "isToastConfirmActive", value: false })
      );
    }, TOAST_ALERT_DURATION_MS);
  }

  useEffect(() => {
    setToastConfirmTimeout();
    return () => clearTimeout(timerId);
  }, [toastConfirmState, toastConfirmText, numberOfShowedAlerts]);

  return (
    <div className={`${s.toastConfirm} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir="ltr">{toastConfirmText}</p>
    </div>
  );
};

export default ToastConfirm;

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};
