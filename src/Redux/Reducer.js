import { combineReducers } from "redux";
import sampleJdSlice from "./Slices/fetchSampleJd";

const rootReducer = combineReducers({
  sampleJd: sampleJdSlice.reducer,
});

export default rootReducer;
