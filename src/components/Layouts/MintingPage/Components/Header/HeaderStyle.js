import styled from "@emotion/styled";
import { positions } from "@mui/system";
import { SecondaryButton } from "../../../../../constants/ButtonStyle";
import { colors } from "../../../../../constants/colors";
import images from "../../../../../constants/images";
import { Logo, Logo2, LogoBom } from "../../../../../constants/Logo";
import { StyledText } from "../../../../../constants/paragraph";

export const GlobalDiv = styled.div`
  /* padding: 6%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${images.Group1});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  mix-blend-mode: luminosity;
  /* z-index: auto;
  filter: brightness(82%) opacity(15%);
  -webkit-filter: brightness(82%) opacity(15%);
  -moz-filter: brightness(82%) opacity(15%); */
`;
export const StyledTimer = styled.div`
  /* padding: 6%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const H1 = styled.h1`
  color: ${colors.red};
`;
export const Span = styled.span`
  color: ${colors.lightRed};
  margin: 8%;
`;
export const StyledPara = styled(StyledText)`
  justify-content: center;
  color: ${colors.lightRed};
  font-weight: 700;
  padding: 1em;
  width: 50%;

  text-align: center;
  color: ${colors.lightRed};
`;
// styling the body
export const Body = styled("div")`
  width: 100%;
  justify-content: space-around;
  display: flex;
  z-index: 2;
  /* background-image: url(${images.Group1}); */
`;
export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

export const SpanPricing = styled.span`
  color: ${colors.lightRed};
  margin: 8%;
  font-weight: 900;
`;

export const PrincingContainer = styled.div`
  /* padding: 6%; */
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`;
export const ButtonStyleHeader = styled.div`
  margin-left: 11rem;
  width: 10rem;
  justify-content: center;
`;
export const Minting = styled("div")`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    position: absolute;
  }
`;

export const MintingWraper = styled("div")`
  display: flex;
  flex-direction: column;
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
export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const StyledTextfooter = styled(StyledText)`
  color: ${colors.lightRed};
  justify-content: center;
`;

export const StyledPfooter = styled(StyledText)`
  color: ${colors.lightRed};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;
export const Hr = styled.hr`
  width: 100rem;
  border-bottom-style: solid;
  color: ${colors.red};
`;
export const Headerlogo = styled(Logo)``;
export const LogoStyle = styled.div`
  padding-top: 6%;
  justify-content: center;

  display: flex;
`;

export const ButtonWraper = styled(SecondaryButton)`
  width: 79%;
  margin-left: 1rem;
`;
export const buttonHR = styled.hr``;
//Footer
export const FooterMinting = styled.div`
  background-color: ${colors.background};
`;
