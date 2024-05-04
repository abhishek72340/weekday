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
  console.log(data);
  return (
    <>
      <Header />
      <div>
        {loading ? (
          <Shimmer data={data} />
        ) : (
          data?.map((item, index) => <JdCard item={item} key={index} />)
        )}
      </div>
    </>
  );
};

export default Home;
