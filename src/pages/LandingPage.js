import React from "react";
import Timer from "../components/CountDown/Timer";

import Header from "../components/Layouts/Header/Header";
import Navbar from "../components/Layouts/Navbar/Navbar";
import RoadMap from "../components/RoadMap/RoadMap";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <RoadMap />
      <Timer />
    </div>
  );
};
export default LandingPage;
