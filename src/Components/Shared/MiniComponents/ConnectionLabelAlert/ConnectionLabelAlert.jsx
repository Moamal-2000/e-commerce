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
    let debounceId;
    debounceId = setTimeout(() => setIsOfflineState(!isOnline), 3000);
    return () => clearTimeout(debounceId);
  }

  useEffect(() => {
    updateInternetStatus();
  }, [isOnline]);

  return (
    <p className={`${s.labelBody} ${activeClass} ${showClass}`}>{message}</p>
  );
};
export default ConnectionLabelAlert;
