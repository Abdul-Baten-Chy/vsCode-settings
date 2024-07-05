import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);
