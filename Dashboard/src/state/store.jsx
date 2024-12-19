import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";

const store = configureStore({
  reducer: {
    students: studentReducer, // Manage students state
  },
});

export default store;
