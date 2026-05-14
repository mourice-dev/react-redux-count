/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const countingReducer = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = countingReducer.actions;

export default countingReducer.reducer;
