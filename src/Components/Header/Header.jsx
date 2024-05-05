import { Grid, TextField } from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import {
  setExperiencedFilter,
  setCompanyNameFilter,
  setJobLocationFilter,
  setJobRoleFilter,
  setSalaryFilter,
} from "../../Redux/Slices/fetchSampleJd";
import {
  experienceData,
  rolesData,
  locationData,
  techStackData,
  salaryData,
  jobTypeData,
} from "../../Data/FilterData.js";

const animatedComponents = makeAnimated();

const placeholderStyle = {
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
};

export default function SelectLabels() {
  const dispatch = useDispatch();
  const { experiencedFilter, jobLocationFilter, jobRoleFilter, salaryFilter } =
    useSelector((state) => state.sampleJd);

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
  const handleSalaryChange = (selectedOption) => {
    dispatch(setSalaryFilter(selectedOption));
  };

  return (
    <>
      <img
        src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
        alt="logo"
        width={150}
        style={{ margin: "0.5rem 1.5rem" }}
      />
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", padding: 3, gap: 1 }}
      >
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={handleExperiencedChange}
          value={experiencedFilter}
          options={experienceData}
          placeholder="Minimum Experience"
          styles={placeholderStyle}
        />

        <TextField
          type="text"
          placeholder="Search Company Name"
          size="small"
          sx={{ maxWidth: "100%" }}
          InputProps={{
            style: { fontSize: "14px" },
          }}
          onChange={handleCompanyNameChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={locationData}
          placeholder="Job Location"
          styles={placeholderStyle}
          value={jobLocationFilter}
          onChange={handleJobLocationChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={jobTypeData}
          placeholder="Job Type"
          styles={placeholderStyle}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={techStackData}
          placeholder="Tech Stack"
          styles={placeholderStyle}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={rolesData}
          placeholder="Roles"
          styles={placeholderStyle}
          value={jobRoleFilter}
          onChange={handleJobRoleChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={salaryData}
          placeholder="Minimum Base Pay Salary"
          styles={placeholderStyle}
          value={salaryFilter}
          onChange={handleSalaryChange}
        />
      </Grid>
    </>
  );
}
