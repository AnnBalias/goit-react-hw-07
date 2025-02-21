import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("contacts/fetchData", async () => {
  try {
    const { data } = await axios.get(
      "https://67b712902bddacfb270d87fd.mockapi.io/contacts"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
