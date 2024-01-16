import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./assets/tailwind.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
