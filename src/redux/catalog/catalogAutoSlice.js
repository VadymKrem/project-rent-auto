import { createSlice } from "@reduxjs/toolkit";

import { fetchAllAdverts } from "./operations";

const catalogInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalogCars",
  initialState: catalogInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const catalogCarsReducer = catalogSlice.reducer;
