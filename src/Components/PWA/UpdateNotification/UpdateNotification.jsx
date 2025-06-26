import { useEffect, useState } from "react";
import { registerSWWithUpdate } from "src/../public/register-pwa";
import { refreshWithNewVersion } from "src/Functions/pwa";
import s from "./UpdateNotification.module.scss";

const UpdateNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    registerSWWithUpdate(setShowNotification);
  }, []);

  return (
    showNotification && (
      <div className={s.notification} role="alert">
        <div className={s.content}>
          <p>A new version is available!</p>
          <button
            onClick={refreshWithNewVersion}
            className={s.refreshButton}
            aria-label="Refresh to update to new version"
          >
            Refresh
          </button>
        </div>
      </div>
    )
  );
};

export default UpdateNotification;
