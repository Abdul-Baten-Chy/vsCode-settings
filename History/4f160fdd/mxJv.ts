import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTodoByName: builder.query({
      query: () => "api/cars",
    }),
    deleteTodoByName: builder.query({
      query: (id) => ({
        url: `api/cars/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTodoByNameQuery } = todoApi;
