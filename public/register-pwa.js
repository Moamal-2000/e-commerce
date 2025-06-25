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
