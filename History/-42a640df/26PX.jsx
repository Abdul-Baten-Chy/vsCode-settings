import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const queryClient = useQueryClient(); // this instance will be used to invalidate cache and
  // refech fresh data after mutation data in server

  const [state, setState] = useState({
    //state to store data from unput field
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:3000/products", newProduct), //callback for post or put data
    onSuccess: (data, variables, context) => {
      //data means newProduct that i send to mutation fn from event
      console.log(context);
      queryClient.invalidateQueries(["products"]); //main part for invalidate old data and fetch fresh data
    },
    onMutate: (variables) => {
      return { greeting: "Say hello" };
    },
  });

  const submitData = (event) => {
    event.preventDefault();
    console.log(state);
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData); // this method conect event to the mutation fn and send newdata to mutation fn to post in server
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "number" // a check is done that if input type is number then take value as number
        ? //formate otherwise it takes value as string
          event.target.valueAsNumber
        : event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }
  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>
      {mutation.isSuccess && <p>Product Added!</p>}
      <form className="flex flex-col" onSubmit={submitData}>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product title"
        />
        <textarea
          value={state.description}
          name="description"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product thumbnail URL"
        />

        <button
          type="submit"
          className="bg-black m-auto text-white text-xl p-1 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
