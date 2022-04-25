import React from "react";
import { PrimaryButton } from "../../../../../constants/ButtonStyle";

import {
  Body,
  BodyContainer,
  ButtonStyleHeader,
  Div,
  DivPricing,
  H1,
  LogoBomHeader,
  Minting,
  Pricing,
  PricingContainer,
  PrincingContainer,
  Second2,
  Span,
  StyledTimer,
  Wrapper,
} from "./MintingBodyStyle";

const MintingBody = () => {
  return (
    <>
      <Body>
        <Wrapper>
          <Div>
            <LogoBomHeader />
            <Second2 />
          </Div>
        </Wrapper>
        <Minting>
          <PrincingContainer>
            <Span>Price</Span>
            <Span>Max</Span>
            <Span>Supply</Span>
          </PrincingContainer>

          <DivPricing>
            <Span>amount</Span>
            <Span>-1+</Span>
          </DivPricing>
        </Minting>
      </Body>
      <ButtonStyleHeader>
        <PrimaryButton>Mint a Rich Boy</PrimaryButton>
      </ButtonStyleHeader>
    </>
  );
};

export default MintingBody;
