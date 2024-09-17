import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
