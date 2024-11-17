import React from "react";
import ReactDOM from "react-dom/client";
import { SnackBarProvider } from "ownui-system";
import "./global.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackBarProvider>
      <App />
    </SnackBarProvider>
  </React.StrictMode>,
);
