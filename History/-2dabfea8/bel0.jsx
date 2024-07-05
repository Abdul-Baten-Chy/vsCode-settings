/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);
const ProductData = ({ children }) => {
  //   const axiosPub = useBaseUrl();
  //   const { data: products = [] } = useQuery({
  //     queryKey: ["products"],
  //     queryFn: async () => {
  //       const res = await axiosPub.get("/products");
  //       return res.data;
  //     },
  //   });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <DataContext.Provider value={{ products }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default ProductData;
