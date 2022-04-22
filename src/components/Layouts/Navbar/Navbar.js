import React from "react";
import { PrimaryButton } from "../../../constants/ButtonStyle";
import { Navbarlogo } from "./Logo";
import { StyledNavbar } from "./NavbarStyle";

const Navbar = () => {
  return (
    <StyledNavbar>
      <PrimaryButton>Menu</PrimaryButton>
      <Navbarlogo />
      <PrimaryButton>Connect your Wallet</PrimaryButton>
    </StyledNavbar>
  );
};

export default Navbar;
