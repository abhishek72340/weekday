import { useSelector } from "react-redux";
const useFilter = () => {
  const {
    experiencedFilter,
    companyNameFilter,
    jobLocationFilter,
    jobRoleFilter,
    jobTypeFilter,
    minSalaryFilter,
    data,
  } = useSelector((state) => state.sampleJd);
  let filteredData = data;
  if (experiencedFilter) {
    filteredData = filteredData?.filter(
      (item) => item?.minExp >= experiencedFilter.value
    );
  }

  if (companyNameFilter) {
    filteredData = filteredData?.filter((item) =>
      item?.companyName.toLowerCase().includes(companyNameFilter.toLowerCase())
    );
  }

  if (jobLocationFilter && jobLocationFilter.length > 0) {
    filteredData = filteredData?.filter((item) =>
      jobLocationFilter.some((selectedOption) =>
        item?.location
          .toLowerCase()
          .includes(selectedOption.value.toLowerCase())
      )
    );
  }

  if (jobRoleFilter && jobRoleFilter.length > 0) {
    filteredData = filteredData?.filter((item) =>
      jobRoleFilter.some((selectedOption) =>
        item?.jobRole.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    );
  }
  if (jobTypeFilter && jobTypeFilter.length > 0) {
    filteredData = filteredData?.filter((item) =>
      jobTypeFilter.some((selectedOption) =>
        item?.location
          .toLowerCase()
          .includes(selectedOption.value.toLowerCase())
      )
    );
  }

  if (minSalaryFilter) {
    filteredData = filteredData?.filter(
      (item) => item?.minJdSalary >= minSalaryFilter.value
    );
  }
  console.log("salaryFilter", minSalaryFilter);
  return { filteredData };
};

export default useFilter;
