/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import Swal from "sweetalert2";
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
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPub.get("/cart");
      return res.data;
    },
  });
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleAddToCart = (product, user) => {
    const cartInfo = { ...product, user };
    if (product) {
      axiosPub.post("/cart", cartInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "product has been added to cart",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    }
  };

  const info = {
    products,
    setSelectedProduct,
    selectedProduct,
    handleAddToCart,
    cart,
    refetch,
  };
  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
};

export default ProductData;
