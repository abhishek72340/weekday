import { Grid, TextField, Tooltip } from "@mui/material";
import useHeader from "./../../Hooks/useHeader";
import { useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  experienceOptions,
  rolesOptions,
  locationOptions,
  techStackOptions,
  salaryOptions,
  jobTypeOptions,
} from "../../Data/FilterOptions.js";

const animatedComponents = makeAnimated();

const placeholderStyle = {
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
};

export default function SelectLabels() {
  const {
    handleExperiencedChange,
    handleCompanyNameChange,
    handleJobLocationChange,
    handleJobRoleChange,
    handleJobTypeChange,
    handleSalaryChange,
  } = useHeader();
  const {
    experiencedFilter,
    jobLocationFilter,
    jobRoleFilter,
    minSalaryFilter,
    jobTypeFilter,
    companyNameFilter,
  } = useSelector((state) => state.sampleJd);

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
          options={experienceOptions}
          placeholder="Minimum Experience"
          styles={placeholderStyle}
          isClearable
        />

        <TextField
          type="text"
          placeholder="Search Company Name"
          size="small"
          sx={{ maxWidth: "100%" }}
          InputProps={{
            style: { fontSize: "14px" },
          }}
          value={companyNameFilter}
          onChange={handleCompanyNameChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={locationOptions}
          placeholder="Job Location"
          styles={placeholderStyle}
          value={jobLocationFilter}
          onChange={handleJobLocationChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          default
          isMulti
          options={jobTypeOptions}
          placeholder="Job Type"
          styles={placeholderStyle}
          value={jobTypeFilter}
          onChange={handleJobTypeChange}
        />
        <Tooltip title="This value is not available in API" placement="top">
          {" "}
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={techStackOptions}
            placeholder="Tech Stack"
            styles={placeholderStyle}
            isDisabled={true}
          />
        </Tooltip>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={rolesOptions}
          placeholder="Roles"
          styles={placeholderStyle}
          value={jobRoleFilter}
          onChange={handleJobRoleChange}
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          value={minSalaryFilter}
          onChange={handleSalaryChange}
          options={salaryOptions}
          placeholder="Minimum Base Pay Salary"
          styles={placeholderStyle}
          isClearable
        />
      </Grid>
    </>
  );
}
