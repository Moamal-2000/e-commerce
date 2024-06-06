import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOAST_ALERT_DURATION_MILLISECONDS } from "src/Data/globalVariables";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./ToastAlert.module.scss";

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};

const ToastAlert = () => {
  const {
    numberOfShowedAlerts,
    isToastAlertActive,
    toastAlertText,
    toastAlertState,
  } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { iconName, className } = toastState[toastAlertState];
  const showClass = isToastAlertActive ? s.show : "";
  let timerId;

  function setToastAlertTimeout() {
    if (!showClass) return;

    timerId = setTimeout(() => {
      dispatch(updateGlobalState({ key: "isToastAlertActive", value: false }));
    }, TOAST_ALERT_DURATION_MILLISECONDS);
  }

  useEffect(() => {
    setToastAlertTimeout();
    return () => clearTimeout(timerId);
  }, [toastAlertState, toastAlertText, numberOfShowedAlerts]);

  return (
    <div className={`${s.toastAlert} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir="ltr">{toastAlertText}</p>
    </div>
  );
};

export default ToastAlert;
