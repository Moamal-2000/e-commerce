import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./ConnectionLabelAlert.module.scss";

const ConnectionLabelAlert = ({ isOnline }) => {
  const [isOfflineState, setIsOfflineState] = useState(false);
  const { t } = useTranslation();
  const activeClass = isOnline ? s.active : "";
  const showClass = isOfflineState ? s.show : "";
  const message = isOnline
    ? t("connectionLabel.restoredInternet")
    : t("connectionLabel.noInternetAvailable");

  function updateInternetStatus() {
    let timerId;
    timerId = setTimeout(() => setIsOfflineState(!isOnline), 3000);
    return () => clearTimeout(timerId);
  }

  useEffect(() => {
    updateInternetStatus();
  }, [isOnline]);

  return (
    <div className={`${s.labelBody} ${activeClass} ${showClass}`}>
      <p>{message}</p>
    </div>
  );
};
export default ConnectionLabelAlert;
