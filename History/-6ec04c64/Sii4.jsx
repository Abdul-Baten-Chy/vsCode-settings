import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);

  //use Query is used to fetch data, data is alised in products
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retrieveProducts, // it can be a function from a custom hook which fetch data
  });

  if (isLoading) return <div>Fetching Products...</div>; // when data is not return loading mount
  if (error) return <div>An error occured: {error.message}</div>; //if no data found, erro return and
  // error message mount

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products.data && // this is a checking for ensuring that data is available to itarate
          //unless error may occur. so it is a good practise to check
          products.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
            >
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
            </li>
          ))}
      </ul>
      <div className="flex">
        {products.prev && ( // this is for pagination, which ois not clear to me yet, i learn it later
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.prev)}
          >
            {" "}
            Prev{" "}
          </button>
        )}
        {products.next && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.next)}
          >
            {" "}
            Next{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
