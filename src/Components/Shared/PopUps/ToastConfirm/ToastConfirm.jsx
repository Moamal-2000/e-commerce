import { useSelector } from "react-redux";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./ToastConfirm.module.scss";
import ToastConfirmButtons from "./ToastConfirmButtons/ToastConfirmButtons";

const ToastConfirm = () => {
  const { isToastConfirmActive, toastConfirmText, toastConfirmState } =
    useSelector((state) => state.global);
  const { iconName, className } = toastState[toastConfirmState];
  const showClass = isToastConfirmActive ? s.show : "";

  return (
    <div className={`${s.toastConfirm} ${className} ${showClass}`} dir="ltr">
      <div className={s.iconHolder}>
        <div className={s.radialColor} />
        <SvgIcon name={iconName} />
      </div>

      <p dir="ltr">{toastConfirmText}</p>

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
