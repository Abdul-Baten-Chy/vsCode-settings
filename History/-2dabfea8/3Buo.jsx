/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import useBaseUrl from "../Hooks/useBaseUrl";

export const DataContext = createContext(null);
const ProductData = ({ children }) => {
  const axiosPub = useBaseUrl();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPub.get("/products");
      return res.data;
    },
  });

  console.log(products);
  return (
    <div>
      <DataContext.Provider value={products}>{children}</DataContext.Provider>
    </div>
  );
};

export default ProductData;
