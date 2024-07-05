import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import Data from "./context/Data";
import AuthProvider from "./context/MyContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Data>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Data>
  </React.StrictMode>
);
