import React from "react";
import { PrimaryButton } from "../../constants/ButtonStyle";
import CountDown from "./CountDown";
import { StyledP } from "./StyledP";
import { StyledTimer } from "./TimerStyle";

const Timer = () => {
  return (
    <StyledTimer>
      <StyledP> Minting Starts Soon</StyledP>
      <CountDown />
      <PrimaryButton>Join the Whitelist</PrimaryButton>
    </StyledTimer>
  );
};

export default Timer;
