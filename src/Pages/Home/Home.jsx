import { useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Shimmer from "./../../Components/Shimmer/Shimmer";
import JdCard from "./../../Cards/JdCard/JdCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleJd } from "../../Redux/Slices/fetchSampleJd";
import { InfiniteScrollUtils } from "../../Utils/InfiniteScrollUtils";
import { Grid } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, page } = useSelector((state) => state.sampleJd);
  const bottomRef = useRef();
  const handleScroll = InfiniteScrollUtils(
    bottomRef,
    dispatch,
    loading,
    page,
    fetchSampleJd
  );

  useEffect(() => {
    dispatch(fetchSampleJd());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Header />
      {loading ? (
        <Shimmer data={data} />
      ) : (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {data &&
            data?.map((item) => <JdCard item={item} key={item?.jdUid} />)}
          <div ref={bottomRef} />
        </Grid>
      )}
    </>
  );
};

export default Home;
