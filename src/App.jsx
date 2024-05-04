import { lazy, Suspense } from "react";
import Shimmer from "./Components/Shimmer/Shimmer";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home/Home"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Shimmer />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
