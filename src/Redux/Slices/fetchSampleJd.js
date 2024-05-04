import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSampleJd = createAsyncThunk(
  "sampleJd/fetchSampleJd",
  async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data?.jdList ?? [];
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  }
);

const sampleJdSlice = createSlice({
  name: "sampleJd",
  initialState: {
    loading: false,
    data: [], // Initialize with an empty array
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleJd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleJd.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update the data in the state
        state.error = null;
      })
      .addCase(fetchSampleJd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sampleJdSlice;
