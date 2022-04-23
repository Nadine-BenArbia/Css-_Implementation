import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";
import { LogoFlex } from "./logo";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10%;
  margin-top: -2rem;

  background-color: ${colors.background};
  padding: 10px;
  text-align: center;
`;
export const TeamContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  color: ${colors.red};
  margin-right: 10%;
  margin-left: 10%;
`;
export const H3 = styled.h3`
  color: ${colors.red};
  font-style: normal;
  font-weight: 500;
`;
export const Hr = styled.hr`
  border-bottom-color: ${colors.red};
  border-bottom-style: solid;
`;
export const GridItem = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
`;
export const GridItemTitle = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 50%;
  justify-content: space-around;
  text-align: initial;
`;
export const GridItemLeft = styled.div`
  background-color: ${colors.background};
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemRight = styled.div`
  background-color: ${colors.background};
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const GridItemRight = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const StyledContainer = styled.p`
  color: ${colors.lightRed};

  align-items: flex-start;
  width: 14rem;
  margin-top: 9%;
`;
export const StyledContainerText = styled("StyledText")`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
`;
export const IconStyle = styled("StyledText")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: initial;
  margin-left: 66%;
  margin-top: -1rem;
  fill: ${colors.red};
`;
export const LogoFlexStyle = styled(LogoFlex)`
  width: 13rem;
  margin-top: 10%;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    margin-left: -5%;
  }
`;
