import { useEffect, useState } from "react";
import "./UpdateNotification.scss";

const UpdateNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Check for new version
    window.addEventListener("load", () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          setShowNotification(true);
        });
      }
    });
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!showNotification) return null;

  return (
    <div className="version-notification" role="alert">
      <div className="version-notification__content">
        <span>A new version is available!</span>
        <button
          onClick={handleRefresh}
          className="version-notification__refresh-btn"
          aria-label="Refresh to update to new version"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;
