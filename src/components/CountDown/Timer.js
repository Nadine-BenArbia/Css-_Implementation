import React from "react";
import { PrimaryButton } from "../../constants/ButtonStyle";
import CountDown from "./CountDown";

import {
  ButtonTimer,
  CounterDeff,
  Div,
  H1,
  Span,
  StyledP,
  StyledTimer,
} from "./TimerStyle";

const Timer = () => {
  return (
    <>
      <StyledTimer>
        <StyledP> Minting Starts Soon</StyledP>
        <Div>
          <StyledTimer>
            <H1>03:</H1>
            <Span>Days</Span>
          </StyledTimer>
          <StyledTimer>
            <H1>15</H1>
            <Span>Hours</Span>
          </StyledTimer>
          <StyledTimer>
            <H1>: 05</H1>
            <Span>Minutes</Span>
          </StyledTimer>
          <StyledTimer>
            <H1>: 53</H1>
            <Span>Seconds</Span>
          </StyledTimer>
        </Div>
        <ButtonTimer>
          <PrimaryButton>Join the Whitelist</PrimaryButton>
        </ButtonTimer>
      </StyledTimer>
    </>
  );
};

export default Timer;
