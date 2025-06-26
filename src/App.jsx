import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import useChangeLangDirOnKeys from "./Hooks/Helper/useChangeLangDirOnKeys";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  useStoreWebsiteDataToLocalStorage();
  // useChangeLangDirOnKeys();

  return <AppRoutes />;
}

export default App;
