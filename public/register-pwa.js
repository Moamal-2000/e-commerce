import { IS_PRODUCTION } from "../src/Data/constants";
import { registerServiceWorker } from "../src/Functions/pwa";

export async function register() {
  const isReadToRegister = navigator?.serviceWorker && IS_PRODUCTION;
  if (!isReadToRegister) return;

  try {
    const registration = await registerServiceWorker();

    return registration;
  } catch (e) {
    console.log("failed to register serviceWorker", e);
  }
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

export async function registerServiceWorker() {
  if (!navigator?.serviceWorker) return "serviceWorker is not supported";
  navigator.serviceWorker.register("/sw.js", { type: "module" });
}
