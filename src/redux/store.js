import { configureStore } from "@reduxjs/toolkit";
import { catalogCarsReducer } from "./catalog/catalogAutoSlice";

export const store = configureStore({
  reducer: {
    catalogCars: catalogCarsReducer,
  },
});
