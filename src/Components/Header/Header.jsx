import * as React from "react";
import {
  experienceData,
  rolesData,
  locationData,
  jobTypeData,
  salaryData,
} from "../../Data/FilterData";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Grid } from "@mui/material";

export default function SelectLabels() {
  const [selectedLocation, setSelectedLocation] = React.useState([]);
  const [selectedRole, setSelectedRole] = React.useState([]);
  const [selectedExperience, setSelectedExperience] = React.useState([]);
  const [selectedJobType, setSelectedJobType] = React.useState([]);
  const [selectedSalary, setSelectedSalary] = React.useState([]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 3,
          gap: 2,
        }}
      >
        <FormControl sx={{ m: 1, maxWidth: "100%" }}>
          <Select
            value={selectedJobType}
            onChange={handleJobTypeChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            multiple
          >
            {jobTypeData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, maxWidth: "100%" }}>
          <Select
            value={selectedLocation}
            onChange={handleLocationChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            multiple
          >
            {locationData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, maxWidth: "100%" }}>
          <Select
            value={selectedRole}
            onChange={handleRoleChange}
            displayEmpty
            inputProps={{ "aria-Label": "Without label" }}
            size="small"
            multiple
          >
            {rolesData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, maxWidth: "100%" }}>
          <Select
            value={selectedExperience}
            onChange={handleExperienceChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            multiple
          >
            {experienceData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Add similar Select components for other filters */}

        <TextField
          type="text"
          placeholder="company name"
          sx={{ maxWidth: "100%" }}
          size="small"
        />

        <TextField
          type="text"
          placeholder="tech stack"
          sx={{ maxWidth: "100%" }}
          size="small"
        />

        <FormControl sx={{ m: 1, maxWidth: "100%" }}>
          <Select
            value={selectedSalary}
            onChange={handleSalaryChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            multiple
          >
            {salaryData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
