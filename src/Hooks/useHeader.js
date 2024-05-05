import { useDispatch } from "react-redux";
import {
  setExperiencedFilter,
  setCompanyNameFilter,
  setJobLocationFilter,
  setJobRoleFilter,
  setJobTypeFilter,
  setMinSalaryFilter,
} from "../Redux/Slices/fetchSampleJd.js";
const useHeader = () => {
  const dispatch = useDispatch();

  const handleExperiencedChange = (selectedOption) => {
    dispatch(setExperiencedFilter(selectedOption));
  };

  const handleCompanyNameChange = (e) => {
    dispatch(setCompanyNameFilter(e.target.value));
  };
  const handleJobLocationChange = (selectedOption) => {
    dispatch(setJobLocationFilter(selectedOption));
  };
  const handleJobRoleChange = (selectedOption) => {
    dispatch(setJobRoleFilter(selectedOption));
  };
  const handleJobTypeChange = (selectedOption) => {
    dispatch(setJobTypeFilter(selectedOption));
  };
  const handleSalaryChange = (selectedOption) => {
    console.log("selectedOption", selectedOption);
    dispatch(setMinSalaryFilter(selectedOption.value));
  };
  return {
    handleExperiencedChange,
    handleCompanyNameChange,
    handleJobLocationChange,
    handleSalaryChange,
    handleJobTypeChange,
    handleJobRoleChange,
  };
};

export default useHeader;
