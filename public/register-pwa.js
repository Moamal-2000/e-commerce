export async function register() {
  const isReadToRegister = navigator?.serviceWorker;
  if (!isReadToRegister) return;

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      type: "module",
    });

    return registration;
  } catch (error) {
    console.log("failed to register serviceWorker", error);
  }
}
