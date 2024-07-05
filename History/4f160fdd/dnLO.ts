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
  }),
    mutateTodoByName: builder.mutation({
      query: () => "api/cars",
    }),
  }),
});

export const { useGetTodoByNameQuery } = todoApi;
