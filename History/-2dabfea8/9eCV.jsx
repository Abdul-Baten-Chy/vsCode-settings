/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
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
  console.log(selectedProduct);
  const [selectedProduct, setSelectedProduct] = useState();
  return (
    <div>
      <DataContext.Provider
        value={(products, setSelectedProduct, selectedProduct)}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default ProductData;
