export async function register() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "../public/sw.js"
      );

      console.log("registered", registration.scope);
    } catch (e) {
      console.log("failed to register", e);
    }
  }
}
