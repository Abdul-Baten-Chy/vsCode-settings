/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";

export const DataContext = createContext(null);
const url = "http://localhost:4000";

const Data = ({ children }) => {
  const {
    data: foods,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async ({ queryKey }) => {
      const res = await axios.get(`${url}/${queryKey}`);
      return res.data; //res.data will be inserted in products
    },
  });
  //   const info = {  };

  return (
    <DataContext.Provider value={(foods, error, isLoading)}>
      {children}
    </DataContext.Provider>
  );
};

export default Data;
