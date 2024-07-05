/* eslint-disable react/prop-types */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext } from "react";

const dataContext = createContext(null);

const Data = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <dataContext.provider value={null}>{children}</dataContext.provider>
    </QueryClientProvider>
  );
};

export default Data;
