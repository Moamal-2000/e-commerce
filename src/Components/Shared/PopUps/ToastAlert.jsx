import i18next from "i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./ToastAlert.module.scss";

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};

const ToastAlert = ({ state, text, visibility }) => {
  const dispatch = useDispatch();
  const { iconName, className } = toastState[state];
  const showClass = visibility ? s.show : "";
  const paragraphDirection = i18next.dir() === "ltr" ? "rtl" : "ltr";
  let timerId;

  useEffect(() => {
    timerId = undefined;
    if (!showClass) return;

    timerId = setTimeout(() => {
      dispatch(updateGlobalState({ key: "isToastAlertActive", value: false }));
    }, 6000);

    return () => clearTimeout(timerId);
  }, [text]);

  return (
    <div className={`${s.toastAlert} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir={paragraphDirection}>{text}</p>
    </div>
  );
};

export default ToastAlert;
