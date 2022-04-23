import React from "react";
import Footer from "../components/Layouts/Footer/Footer";
import TimerHeder from "../components/Layouts/MintingPage/Components/Header/TimerHeder";
import MintingBody from "../components/Layouts/MintingPage/Components/MintingBody/MintingBody";

import Navbar from "../components/Layouts/Navbar/Navbar";

const MintingPage = () => {
  return (
    <div>
      <Navbar />
      <TimerHeder />
      <MintingBody />

      <Footer />
    </div>
  );
};

export default MintingPage;
