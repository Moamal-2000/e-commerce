export async function register() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", {
        type: "module",
      });

      return registration;
    } catch (e) {
      console.log("failed to register serviceWorker", e);
    }
  }
}
