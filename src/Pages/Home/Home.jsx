import { useEffect, useRef } from "react";
import useFilter from "./../../Hooks/useFilter";
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
    data,
    page,
    error,
    experiencedFilter,
    companyNameFilter,
    jobLocationFilter,
    jobRoleFilter,
    jobTypeFilter,
    minSalaryFilter,
  } = useSelector((state) => state.sampleJd);
  const bottomRef = useRef();
  const { filteredData } = useFilter(data);
  const handleScroll = InfiniteScrollUtils(
    bottomRef,
    dispatch,
    loading,
    page,
    fetchSampleJd
  );

  useEffect(() => {
    dispatch(fetchSampleJd());
  }, [
    dispatch,
    experiencedFilter,
    companyNameFilter,
    jobLocationFilter,
    jobRoleFilter,
    jobTypeFilter,
    minSalaryFilter,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (error) return;
  return (
    <>
      <Header />

      {loading ? (
        <Shimmer data={data} />
      ) : (
        <>
          {filteredData.length === 0 && (
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                marginTop: "-4rem",
              }}
            >
              <img src="/no-job.gif" width={300} />
              <Typography variant="h5">
                {" "}
                No Jobs available for this category!
              </Typography>
            </Stack>
          )}
          <Grid container spacing={3} justifyContent="start">
            {filteredData &&
              filteredData?.map((item) => (
                <JdCard item={item} key={item?.jdUid} />
              ))}
            <div ref={bottomRef} />
          </Grid>
        </>
      )}
    </>
  );
};

export default Home;
