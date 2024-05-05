import { useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Shimmer from "./../../Components/Shimmer/Shimmer";
import JdCard from "./../../Cards/JdCard/JdCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleJd } from "../../Redux/Slices/fetchSampleJd";
import { InfiniteScrollUtils } from "../../Utils/InfiniteScrollUtils";
import { Grid, Typography, Stack } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    data,
    page,
    experiencedFilter,
    companyNameFilter,
    jobLocationFilter,
    jobRoleFilter,
    salaryFilter,
  } = useSelector((state) => state.sampleJd);
  const bottomRef = useRef();
  const handleScroll = InfiniteScrollUtils(
    bottomRef,
    dispatch,
    loading,
    page,
    fetchSampleJd
  );

  let filteredData = data;

  if (experiencedFilter) {
    filteredData = filteredData.filter(
      (item) => item.minExp >= experiencedFilter.value
    );
  }

  if (companyNameFilter) {
    filteredData = filteredData.filter((item) =>
      item.companyName.toLowerCase().includes(companyNameFilter.toLowerCase())
    );
  }

  if (jobLocationFilter && jobLocationFilter.length > 0) {
    filteredData = filteredData.filter((item) =>
      jobLocationFilter.some((selectedOption) =>
        item.location.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    );
  }

  if (jobRoleFilter && jobRoleFilter.length > 0) {
    filteredData = filteredData.filter((item) =>
      jobRoleFilter.some((selectedOption) =>
        item.jobRole.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    );
  }

  if (experiencedFilter) {
    filteredData = filteredData.filter(
      (item) => item.minExp >= experiencedFilter.value
    );
  }
  if (salaryFilter) {
    filteredData = filteredData.filter(
      (item) => item.minJdSalary >= salaryFilter.value
    );
  }

  useEffect(() => {
    dispatch(fetchSampleJd());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (error)
    return (
      <>
        <Header />{" "}
        <Stack justifect="center" alignItems="center">
          <img
            src="https://dressup-shop.netlify.app/static/media/error.84a4f5ac7cc4a63e4484.gif"
            width={300}
          />
          <Typography variant="h5" color="red">
            {" "}
            Network Error!
          </Typography>
        </Stack>
      </>
    );
  return (
    <>
      <Header />

      {loading ? (
        <Shimmer data={data} />
      ) : (
        <Grid container spacing={3} justifyContent="start">
          {filteredData?.map((item) => (
            <JdCard item={item} key={item?.jdUid} />
          ))}
          <div ref={bottomRef} />
        </Grid>
      )}
    </>
  );
};

export default Home;
