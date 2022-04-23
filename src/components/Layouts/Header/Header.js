import React from "react";

import {
  First,
  Forth,
  HeaderText,
  Second,
  StyledHeader,
  Third,
  Wrapper,
} from "./HeaderStyle";

import { ButtonStyleHeader } from "./ButtonStyleHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <First />
        <Second />
      </Wrapper>
      <Third />
      <Forth />

      <HeaderText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.{" "}
      </HeaderText>
      <ButtonStyleHeader>Mint a Rich Boy</ButtonStyleHeader>
    </StyledHeader>
  );
};

export default Header;
