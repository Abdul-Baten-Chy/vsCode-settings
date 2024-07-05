import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);
