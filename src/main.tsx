import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/i18n/config";
import App from "./App";
import "./main.css";
import { ThemeProvider } from "./shared/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
