import React from "react";
import Timer from "../components/CountDown/Timer";
import Footer from "../components/Layouts/Footer/Footer";

import Header from "../components/Layouts/Header/Header";
import Navbar from "../components/Layouts/Navbar/Navbar";
import TeamGrid from "../components/Layouts/TeamGrid/TeamGrid";
import RoadMap from "../components/RoadMap/RoadMap";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <RoadMap />
      <TeamGrid />
      <Timer />
      <Footer />
    </div>
  );
};
export default LandingPage;
