import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
