import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./ToastAlert.module.scss";

const ToastAlert = ({ state, text, visibility }) => {
  const dispatch = useDispatch();
  const toastState = {
    success: { iconName: "checked", className: s.success },
    warning: { iconName: "exclamation", className: s.warning },
    error: { iconName: "xMark", className: s.error },
  };
  const { iconName, className } = toastState[state];
  const showClass = visibility ? s.show : "";

  function closeAlertAsync() {
    if (!showClass) return;
    let timerId;

    // timerId = setTimeout(() => {
    //   dispatch(updateGlobalState({ key: "isToastAlertActive", value: false }));
    // }, 6000);

    return () => clearTimeout(timerId);
  }

  useEffect(() => {
    closeAlertAsync();
  }, [showClass]);

  return (
    <div className={`${s.toastAlert} ${className} ${showClass}`}>
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ToastAlert;
