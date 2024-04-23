import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./App/store.jsx";
import "./Styles/main.scss";
import i18next from "./Translations/i18n.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </I18nextProvider>
    </Provider>
  </StrictMode>
);

// servicerWorker.register();
