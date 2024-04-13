import { useEffect, useState } from "react";
import s from "./ConnectionLabelAlert.module.scss";

const ConnectionLabelAlert = ({ isOnline }) => {
  const [isOfflineState, setIsOfflineState] = useState(false);
  const activeClass = isOnline ? s.active : "";
  const showClass = isOfflineState ? s.show : "";
  const message = isOnline
    ? "The connection has been restored"
    : "No internet connection available.";

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
