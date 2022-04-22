import React from "react";

import { LogoHeader } from "../../../constants/HeaderLogo";

import { StyledHeader } from "./HeaderStyle";
import { StyledText } from "../../../constants/paragraph";
import { ButtonStyleHeader } from "./ButtonStyleHeader";

const Header = () => {
  return (
    <StyledHeader>
      <LogoHeader />
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.{" "}
      </StyledText>
      <ButtonStyleHeader>Mint a Rich Boy</ButtonStyleHeader>
    </StyledHeader>
  );
};

export default Header;
