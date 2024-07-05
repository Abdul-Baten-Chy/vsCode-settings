import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider></AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
