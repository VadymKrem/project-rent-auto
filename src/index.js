import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-rent-auto">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
