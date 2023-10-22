import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./main.scss";
import { store } from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
);
