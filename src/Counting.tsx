/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const countingSlice = createSlice({
  name: "count",
  initialState: { value: { count: 0 } },
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
          count: state.value.count + 1;
      },
      decrement: (state, action) => {
          state.value = action.payload;
          count: state.value.count - 1;
      }
    },
  });

export default countingSlice.reducer;
export const { increment, decrement } = countingSlice.actions;
