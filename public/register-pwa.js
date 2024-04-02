export async function register() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");

      // console.log("serviceWorker registered", registration);
    } catch (e) {
      console.log("failed to register serviceWorker", e);
    }
  }
}
