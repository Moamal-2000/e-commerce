import { useEffect } from "react";
import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";
import i18next from "i18next";
import cookies from "js-cookie";

function App() {
  useStoreWebsiteDataToLocalStorage();

  const lng = cookies.get("i18next") || "en";

  useEffect(() => {
    console.log(i18next.dir());
    window.document.dir = i18next.dir()
  }, [lng])

  return <AppRoutes />;
}

export default App;
