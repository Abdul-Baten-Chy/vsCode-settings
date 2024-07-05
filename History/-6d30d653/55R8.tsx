import { Ttodo } from "@/app/componenets/TodoContainer";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Ttodo[] = {
  id: "01",
  title: "your todo",
  description: "describe todo",
  isComplited: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.push(actions.payload);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions;

export default counterSlice.reducer;
