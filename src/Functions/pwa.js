import { IS_PRODUCTION } from "../Data/constants";

export async function registerServiceWorker() {
  if (!navigator?.serviceWorker) return "serviceWorker is not supported";

  navigator.serviceWorker.register("/sw.js", { type: "module" });
}

export async function registerSWWithUpdate(setShowNotification) {
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

export function refreshWithNewVersion() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ action: "skipWaiting" });
  }
  refreshPage();
}
