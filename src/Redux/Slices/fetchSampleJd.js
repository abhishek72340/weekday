import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSampleJd = createAsyncThunk(
  "sampleJd/fetchSampleJd",
  async (page) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: (page - 1) * 10,
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
    data: [],
    error: null,
    page: 1,
    experiencedFilter: null,
  },
  reducers: {
    setExperiencedFilter: (state, action) => {
      state.experiencedFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleJd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleJd.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        state.error = null;
        state.page += 1;
      })
      .addCase(fetchSampleJd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setExperiencedFilter } = sampleJdSlice.actions;
export default sampleJdSlice;
