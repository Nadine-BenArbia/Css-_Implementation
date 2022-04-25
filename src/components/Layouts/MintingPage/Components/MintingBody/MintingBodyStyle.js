import styled from "@emotion/styled";
import { PrimaryButton } from "../../../../../constants/ButtonStyle";
import { colors } from "../../../../../constants/colors";
import images from "../../../../../constants/images";
import { Background, Logo2, LogoBom } from "../../../../../constants/Logo";

export const Body = styled("div")`
  justify-content: space-around;
  display: flex;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const H1 = styled.h1`
  color: ${colors.red};
`;
export const Span = styled.p`
  color: ${colors.lightRed};
  margin: 8%;
`;
export const StyledTimer = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
`;
// position img
export const Wrapper = styled("div")`
  position: relative;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    position: absolute;
  }
`;
export const LogoBomHeader = styled(LogoBom)`
  position: absolute;

  height: 16rem;
  top: -2rem;
  left: 0;
  width: 100%;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
export const Second2 = styled(Logo2)`
  position: relative;

  margin-left: -9%;
  width: 76%;
  border: solid;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
//styling img + Conter

export const BodyContainer = styled("div")`
  display: flex;
  @media (max-width: 600px) {
    position: absolute;
  }
`;

export const Pricing = styled("div")`
  display: flex;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
// styling Pricing
export const PrincingContainer = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  background-color: ${colors.background};
`;
export const ButtonStyleHeader = styled.div`
  width: 10rem;
  justify-content: center;
  background-color: ${colors.background};
`;
export const Minting = styled("div")`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    position: absolute;
  }
`;

export const DivPricing = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: space-between;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
