import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// *****Async thunk function to fetch sample JDs******
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

//*****Slice*****
const sampleJdSlice = createSlice({
  name: "sampleJd",
  initialState: {
    loading: false,
    data: [],
    error: null,
    page: 1,
    experiencedFilter: null,
    companyNameFilter: null,
    jobLocationFilter: null,
    jobRoleFilter: null,
    jobTypeFilter: null,
    minSalaryFilter: null,
    filteredData: [],
  },

  // *****Reducers to set various filters*****
  reducers: {
    setExperiencedFilter: (state, action) => {
      state.experiencedFilter = action.payload;
    },
    setCompanyNameFilter: (state, action) => {
      state.companyNameFilter = action.payload;
    },
    setJobLocationFilter: (state, action) => {
      state.jobLocationFilter = action.payload;
    },
    setJobRoleFilter: (state, action) => {
      state.jobRoleFilter = action.payload;
    },
    setJobTypeFilter: (state, action) => {
      state.jobTypeFilter = action.payload;
    },
    setMinSalaryFilter: (state, action) => {
      state.minSalaryFilter = action.payload;
    },
  },

  // *****Extra reducers for handling async thunk actions*****
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleJd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleJd.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action.payload, ...state.data];
        state.error = null;
        state.page += 1;
      })
      .addCase(fetchSampleJd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// *****Export slice actions and reducer*****
export const {
  setExperiencedFilter,
  setCompanyNameFilter,
  setJobLocationFilter,
  setJobRoleFilter,
  setJobTypeFilter,
  setMinSalaryFilter,
} = sampleJdSlice.actions;
export default sampleJdSlice;
