import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "statesList",
  initialState: [],
  reducers: {
    addState(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addState } = stateSlice.actions;
export const stateListReducer= stateSlice.reducer;

