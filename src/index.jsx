import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router";
import Provider from "./utils/store/provide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <AppRouter />
  </Provider>,
);

