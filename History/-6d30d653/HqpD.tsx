import { Ttodo } from "@/app/componenets/TodoContainer";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Ttodo = {
  id: "01",
  title: "your todo",
  description: "describe todo",
  isComplited: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
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
