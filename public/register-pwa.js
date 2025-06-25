import { IS_PRODUCTION } from "../src/Data/constants";

export async function register() {
  const isReadToRegister = navigator?.serviceWorker && IS_PRODUCTION;
  if (!isReadToRegister) return;

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      type: "module",
    });

    return registration;
  } catch (e) {
    console.log("failed to register serviceWorker", e);
  }
}
