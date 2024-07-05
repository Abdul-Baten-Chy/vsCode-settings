import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import Data from "./context/Data";
import AuthProvider from "./context/MyContext";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Data>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Data>
    </QueryClientProvider>
  </React.StrictMode>
);
