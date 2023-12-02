import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://64f0b6df8a8b66ecf77a0c94.mockapi.io";

export const fetchAllAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/adverts`, { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
