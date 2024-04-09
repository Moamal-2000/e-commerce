import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import * as servicerWorker from "../public/register-pwa.js";
import App from "./App.jsx";
import { store } from "./App/store.jsx";
import "./Styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);

// servicerWorker.register();
