import { Route, Routes } from "react-router-dom";
import FirstHeader from "./Components/Header.js/FirstHeader";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import ProductCard from "./Components/Shared/ProductsCards/ProductCard";
import SectionTitle from "./Components/Shared/SectionTitle";
import Home from "./Components/homePage/Home";
import EventCounter from "./Components/homePage/ProductsSections/EventCounter";

const options = {
  method: "GET",
  url: "https://kohls.p.rapidapi.com/categories/list",
  headers: {
    "X-RapidAPI-Key": "379e1aa4b4msh48876c1de07d093p106f6djsn5e60d9de0e21",
    "X-RapidAPI-Host": "kohls.p.rapidapi.com",
  },
};

function App() {
  // const {data, setData} = useFetchDataFrom(options)
  // console.log(data);

  return (
    <div className="App">
      <GlobalOverlay />
      <FirstHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="" element={<Contact />} />
          <Route path="" element={<About />} />
          <Route path="" element={<SignUp />} /> */}
      </Routes>

      <EventCounter />
    </div>
  );
}

export default App;
