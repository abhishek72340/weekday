import { Grid, TextField } from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import { setExperiencedFilter } from "../../Redux/Slices/fetchSampleJd";
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
  const { experiencedFilter } = useSelector((state) => state.sampleJd);
  console.log("experiencedFilter", experiencedFilter);
  const handleExperiencedChange = (selectedOption) => {
    dispatch(setExperiencedFilter(selectedOption));
  };
  return (
    <>
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
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={locationData}
          placeholder="Job Location"
          styles={placeholderStyle}
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
        />
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={salaryData}
          placeholder="Minimum Base Pay Salary"
          styles={placeholderStyle}
        />
      </Grid>
    </>
  );
}
