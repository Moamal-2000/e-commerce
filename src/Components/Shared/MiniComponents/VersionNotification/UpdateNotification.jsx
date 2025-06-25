import { useEffect, useState } from "react";
import { IS_PRODUCTION } from "src/Data/constants";
import { refreshPage, registerServiceWorker } from "src/Functions/helper";
import s from "./UpdateNotification.module.scss";

const UpdateNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    registerSWWithUpdate(setShowNotification);
  }, []);

  function handleRefreshPage() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ action: "skipWaiting" });
    }
    refreshPage();
  }

  return (
    showNotification && (
      <div className={s.notification} role="alert">
        <div className={s.content}>
          <p>A new version is available!</p>
          <button
            onClick={handleRefreshPage}
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

async function registerSWWithUpdate(setShowNotification) {
  const isReadToRegister = navigator?.serviceWorker && IS_PRODUCTION;
  if (!isReadToRegister) return;

  try {
    const registration = await registerServiceWorker();
    if (registration.waiting) setShowNotification(true);

    registration.addEventListener("updatefound", () =>
      handleUpdateFound(registration, setShowNotification)
    );
  } catch (err) {
    console.error(`Error registering service worker: ${err}`);
  }
}

function handleUpdateFound(registration, setShowNotification) {
  const newWorker = registration.installing;
  if (!newWorker) return;

  newWorker.addEventListener("statechange", () => {
    const updateRequired =
      newWorker.state === "installed" && navigator.serviceWorker.controller;

    if (updateRequired) {
      setShowNotification(true);
    }
  });
}
