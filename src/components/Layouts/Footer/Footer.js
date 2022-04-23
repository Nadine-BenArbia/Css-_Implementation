import React from "react";
import { PrimaryButton } from "../../../constants/ButtonStyle";

import {
  Container,
  FlexBox,
  FooterButton,
  FooterStyle,
  StyledPfooter,
  StyledTextfooter,
} from "./FooterStyle";
import { Footerlogo } from "./FooterLogo";
const Footer = () => {
  return (
    <FooterStyle>
      <hr />
      <FooterStyle>
        <Footerlogo />
      </FooterStyle>
      <FooterButton> EtherScan</FooterButton>
      <Container>
        <StyledTextfooter>
          <StyledTextfooter>Contact</StyledTextfooter>
          <StyledTextfooter>Twitter</StyledTextfooter>
          <StyledTextfooter>Instagram</StyledTextfooter>
          <StyledTextfooter>OpenSea</StyledTextfooter>
          <StyledTextfooter>OpenSea</StyledTextfooter>
        </StyledTextfooter>
        <StyledPfooter>Made With 🥰By Cyber Division Team </StyledPfooter>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
