import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  useStoreWebsiteDataToLocalStorage();

  return <AppRoutes />;
}

export default App;
