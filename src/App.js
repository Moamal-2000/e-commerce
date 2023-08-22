import FirstHeader from "./Components/Header.js/FirstHeader";
import Header from "./Components/Header.js/Header";
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const globalContextData = {};

  return (
    <div className="App">
      <GlobalContext.Provider value={globalContextData}>
        <FirstHeader />
        <Header />

        {/* <Routes>
          <Route path="" to={<} />
          <Route path="" to={<} />
          <Route path="" to={<} />
          <Route path="" to={<} />
        </Routes> */}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
