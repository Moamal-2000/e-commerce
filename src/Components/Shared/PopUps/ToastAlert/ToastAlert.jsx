import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOAST_ALERT_DURATION_MS } from "src/Data/globalVariables";
import { updateAlertState } from "src/Features/alertsSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./ToastAlert.module.scss";

const ToastAlert = () => {
  const { alert } = useSelector((state) => state.alerts);
  const { isAlertActive, alertText, alertState } = alert;
  const dispatch = useDispatch();
  const { iconName, className } = toastState[alertState];
  const showClass = isAlertActive ? s.show : "";
  const debounceId = useRef();

  function setToastAlertTimeout() {
    if (!showClass) return;

    debounceId.current = setTimeout(() => {
      dispatch(
        updateAlertState({ key: "isAlertActive", value: false, type: "alert" })
      );
    }, TOAST_ALERT_DURATION_MS);
  }

  useEffect(() => {
    setToastAlertTimeout();
    return () => clearTimeout(debounceId.current);
  }, [alertState, alertText]);

  return (
    <div className={`${s.toastAlert} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir="ltr">{alertText}</p>
    </div>
  );
};

export default ToastAlert;

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};
