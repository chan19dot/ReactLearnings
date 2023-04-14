import { configureStore } from "@reduxjs/toolkit";
import { stateListReducer } from "./slices/statesSlice";
import { todoListReducer } from "./slices/todoSlice";

const todoStore = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
const stateStore = configureStore({
  reducer: {
    statesList: stateListReducer,
  },
});
export { todoStore, stateStore };
