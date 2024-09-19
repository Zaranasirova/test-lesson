import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import userReducer from "./UserSlice"; // default export kullanıldığı için böyle çağırılmalı

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    user: userReducer,
  },
});
