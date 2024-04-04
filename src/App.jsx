import { testVariable } from "../public/testGlobalVars";
import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  console.log(testVariable);
  useStoreWebsiteDataToLocalStorage()
  return <AppRoutes />;
}

export default App;
