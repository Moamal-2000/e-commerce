import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./App/store.jsx";
import "./Styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
);

// servicerWorker.register();
