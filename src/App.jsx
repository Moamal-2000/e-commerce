import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  useStoreWebsiteDataToLocalStorage();
  // useChangeLangDirOnKeys();

  return <AppRoutes />;
}

export default App;
