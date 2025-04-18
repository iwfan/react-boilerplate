import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/i18n/config";
import App from "./App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
