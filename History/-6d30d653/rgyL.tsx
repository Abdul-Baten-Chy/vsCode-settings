import { Ttodo } from "@/app/componenets/TodoContainer";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Ttodo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.push(actions.payload);
    },
    deleteTodo: (state, actions) => {
      state = state.filter((item) => item.id !== actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
