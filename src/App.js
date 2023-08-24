import { useState } from "react";
import FirstHeader from "./Components/Header.js/FirstHeader";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import { GlobalContext } from "./Context/GlobalContext";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [addedProducts, setAddedProducts] = useState(0);
  const [addedFavorites, setAddedFavorites] = useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const globalContextData = {
    addedProducts,
    setAddedProducts,
    addedFavorites,
    setAddedFavorites,
    isMobileMenuActive,
    setIsMobileMenuActive,
    isOverlayActive,
    setIsOverlayActive,
    userName: "Lily Watson",
  };

  return (
    <GlobalContext.Provider value={globalContextData}>
      <div className="App">
      <GlobalOverlay />
        <FirstHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="" element={<Contact />} />
          <Route path="" element={<About />} />
          <Route path="" element={<SignUp />} /> */}
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
