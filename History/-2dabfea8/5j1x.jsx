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

  const [selectedProduct, setSelectedProduct] = useState({});
  console.log(selectedProduct);
  const info = { products, setSelectedProduct, selectedProduct };
  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
};

export default ProductData;
