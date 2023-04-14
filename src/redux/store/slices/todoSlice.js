import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: ["hello"],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todoListReducer = todoSlice.reducer;
