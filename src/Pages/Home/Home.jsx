import Header from "../../Components/Header/Header";
import Shimmer from "./../../Components/Shimmer/Shimmer";
import JdCard from "./../../Cards/JdCard/JdCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleJd } from "../../Redux/Slices/fetchSampleJd";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.sampleJd);
  useEffect(() => {
    dispatch(fetchSampleJd());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div>
        {loading ? (
          <Shimmer data={data} />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "1rem",
              padding: "1rem",
            }}
          >
            {data &&
              data?.map((item) => <JdCard item={item} key={item?.jdUid} />)}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
