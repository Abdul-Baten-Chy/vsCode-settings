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
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
