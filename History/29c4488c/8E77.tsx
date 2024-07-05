import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider.tsx";
import Router from "./Router.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
