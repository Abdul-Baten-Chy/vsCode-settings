import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MyContext from "./Contex/MyContext";
import ProductData from "./Contex/ProductData";
import router from "./Router";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <QueryClientProvider client={queryClient}>
        <ProductData>
          <RouterProvider router={router} />
        </ProductData>
      </QueryClientProvider>
    </MyContext>
  </React.StrictMode>
);
