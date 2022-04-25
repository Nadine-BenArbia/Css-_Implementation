import React from "react";
import { Footer } from "../components/Layouts/MintingPage/Components/Footer";
import TimerHeder from "../components/Layouts/MintingPage/Components/Header/TimerHeder";

import Navbar from "../components/Layouts/Navbar/Navbar";

const MintingPage = () => {
  return (
    <div>
      <Navbar />
      <TimerHeder />
      <Footer />
    </div>
  );
};

export default MintingPage;
