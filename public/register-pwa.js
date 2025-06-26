import { IS_PRODUCTION } from "../src/Data/constants";
import { handleUpdateFound } from "../src/Functions/pwa";

export async function registerSWWithUpdate(setShowNotification) {
  const isReadToRegister = navigator?.serviceWorker && IS_PRODUCTION;
  if (!isReadToRegister) return;

  try {
    const registration = await navigator.serviceWorker.register("/sw.js");

    if (registration.waiting) setShowNotification(true);

    registration.addEventListener("updatefound", () =>
      handleUpdateFound(registration, setShowNotification)
    );
  } catch (err) {
    console.error(`Error registering service worker: ${err}`);
  }
}
