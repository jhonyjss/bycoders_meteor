import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./assets/tailwind.css";
import "./assets/global.css";
import { Provider } from "jotai";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
