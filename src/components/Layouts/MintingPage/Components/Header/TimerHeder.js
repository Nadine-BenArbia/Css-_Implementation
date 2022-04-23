import React from "react";
import {
  Body,
  BodyContainer,
  ButtonStyleHeader,
  Div,
  GlobalDiv,
  H1,
  LogoBomHeader,
  Minting,
  Pricing,
  PrincingContainer,
  Second2,
  Span,
  StyledPara,
  StyledTimer,
  Wrapper,
} from "./HeaderStyle";

const TimerHeder = () => {
  return (
    <GlobalDiv>
      <StyledPara> Minting ends in</StyledPara>
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
    </GlobalDiv>
  );
};

export default TimerHeder;
