import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient(); //QueryClient দিয়ে একটা ইন্সটেন্স তৈরী করা হয়েছে।
// যেটাকে  এপে QueryClientProvider দিয়ে প্রভাইড করা হয়েছে।

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
