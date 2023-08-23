import { Route, Routes } from "react-router-dom";
import FirstHeader from "./Components/Header.js/FirstHeader";
import Header from "./Components/Header.js/Header";
import { GlobalContext } from "./Context/GlobalContext";
import { useState } from "react";

function App() {
  const [addedProducts, setAddedProducts] = useState(0)
  const [addedFavorites, setAddedFavorites] = useState(0)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  const globalContextData = {
    addedProducts, setAddedProducts,
    addedFavorites, setAddedFavorites,
    isMobileMenuActive, setIsMobileMenuActive,
    userName: "Lily Watson",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={globalContextData}>
        <FirstHeader />
        <Header />

        {/* <Routes>
          <Route path="" to={<Home />} />
          <Route path="" to={<Contact />} />
          <Route path="" to={<About />} />
          <Route path="" to={<SignUp} />
        </Routes> */}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
