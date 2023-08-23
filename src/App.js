import { useState } from "react";
import FirstHeader from "./Components/Header.js/FirstHeader";
import Header from "./Components/Header.js/Header";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import { GlobalContext } from "./Context/GlobalContext";

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
      <GlobalOverlay />
      <div className="App">
        <FirstHeader />
        <Header />

        {/* <Routes>
          <Route path="" to={<Home />} />
          <Route path="" to={<Contact />} />
          <Route path="" to={<About />} />
          <Route path="" to={<SignUp} />
        </Routes> */}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
