import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  { reducer: todoReducer }
  // ,composerEnhancer()
);
