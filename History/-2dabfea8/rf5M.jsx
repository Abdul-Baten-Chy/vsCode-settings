/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect } from "react";

export const DataContext = createContext(null);
// const ProductData = ({ children }) => {
//   const axiosPub = useBaseUrl();
//   const { data: products = [] } = useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const res = await axiosPub.get("/products");
//       return res.data;
//     },
//   });
useEffect(()=>{
   async()=>{
    const res= await axios.get('http://localhost:4000/products')
   }
},[])
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
