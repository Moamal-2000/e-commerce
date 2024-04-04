import { variable } from "../public/testVariables";
import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  console.log(variable);
  useStoreWebsiteDataToLocalStorage();
  return <AppRoutes />;
}

export default App;
