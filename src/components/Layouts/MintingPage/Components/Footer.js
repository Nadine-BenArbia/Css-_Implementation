import React from "react";
import {
  Container,
  FooterMinting,
  Hr,
  StyledPfooter,
  StyledTextfooter,
} from "./Header/HeaderStyle";

export const Footer = () => {
  return (
    <FooterMinting>
      <Hr />
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
    </FooterMinting>
  );
};
