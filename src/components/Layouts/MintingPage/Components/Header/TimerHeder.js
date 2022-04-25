import React from "react";
import { PrimaryButton } from "../../../../../constants/ButtonStyle";
import {
  Body,
  ButtonStyleHeader,
  ButtonWraper,
  Div,
  DivBody,
  DivPricing,
  GlobalDiv,
  H1,
  Headerlogo,
  LogoBomHeader,
  LogoStyle,
  Minting,
  MintingWraper,
  PrincingContainer,
  Second2,
  Span,
  SpanPricing,
  StyledPara,
  StyledTimer,
  Wrapper,
} from "./HeaderStyle";

const TimerHeader = () => {
  return (
    <>
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

        <Body>
          <Wrapper>
            <DivBody>
              <LogoBomHeader />
              <Second2 />
            </DivBody>
            <ButtonWraper>
              Rich Boy <br /> track 1#
              <buttonHR />
            </ButtonWraper>
          </Wrapper>
          <Minting>
            <MintingWraper>
              <PrincingContainer>
                <SpanPricing>Price</SpanPricing>
                <SpanPricing>Max</SpanPricing>
                <SpanPricing>Supply</SpanPricing>
              </PrincingContainer>

              <DivPricing>
                <SpanPricing>amount</SpanPricing>
                <SpanPricing>-1+</SpanPricing>
              </DivPricing>
            </MintingWraper>
            <ButtonStyleHeader>
              <PrimaryButton>Mint a Rich Boy</PrimaryButton>
            </ButtonStyleHeader>
          </Minting>
        </Body>
        <LogoStyle>
          <Headerlogo />
        </LogoStyle>
      </GlobalDiv>
    </>
  );
};

export default TimerHeader;
