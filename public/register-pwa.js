export async function register() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", {
        type: "module",
      });

      console.log("registered", registration);
    } catch (e) {
      console.log("failed to register", e);
    }
  }
}
