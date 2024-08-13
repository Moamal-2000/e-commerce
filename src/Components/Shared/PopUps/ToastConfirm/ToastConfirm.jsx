import i18n from "i18next";
import { useSelector } from "react-redux";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./ToastConfirm.module.scss";
import ToastConfirmButtons from "./ToastConfirmButtons/ToastConfirmButtons";

const ToastConfirm = () => {
  const { confirm } = useSelector((state) => state.alerts);
  const { isAlertActive, alertText, alertState } = confirm;
  const { iconName, className } = toastState[alertState];
  const showClass = isAlertActive ? s.show : "";
  const textDirection = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div className={`${s.toastConfirm} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir={textDirection}>{alertText}</p>

      <ToastConfirmButtons />
    </div>
  );
};

export default ToastConfirm;

const toastState = {
  success: { iconName: "checked", className: s.success },
  warning: { iconName: "exclamation", className: s.warning },
  error: { iconName: "xMark", className: s.error },
};
