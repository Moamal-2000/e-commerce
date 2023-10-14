import { Route, Routes } from "react-router-dom";
import FirstHeader from "./Components/Header.js/FirstHeader";
import Home from "./Components/Home/Home";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";

function App() {
  return (
    <div className="App">
      <GlobalOverlay />
      <FirstHeader />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Route path="" element={<Contact />} />
          <Route path="" element={<About />} />
          <Route path="" element={<SignUp />} /> */}
    </div>
  );
}

export default App;
