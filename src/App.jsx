import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import Home from "./components/homePage/Home";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <GlobalOverlay />
      <Home />
      {/* <AppRoutes /> */}
    </div>
  );
}

export default App;
