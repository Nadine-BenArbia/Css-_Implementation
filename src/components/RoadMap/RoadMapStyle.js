import styled from "@emotion/styled";

import { colors } from "../../constants/colors";
import { GridLogo2, GridLogoSide1, GridLogoSide2 } from "../../constants/Logo";

export const RoadMapStyle = styled("div")`
  display: flex;
  flex-direction: column;

  background-color: ${colors.background};
`;
export const StyledTextGrid = styled("StyledText")`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;

  color: ${colors.lightRed};
`;
export const H3 = styled.h3`
  color: ${colors.lightRed};
`;
export const H1 = styled.h1`
  color: ${colors.lightRed};
  margin-bottom: -4rem;

  margin-right: 10%;
  margin-left: 10%;
`;

export const ContentBox2 = styled("ContentBox2")`
  margin: 10%;
`;
export const Content3Logo = styled(GridLogo2)`
  display: block;
  width: 50%;
  padding-top: 6rem;
  margin-left: 5rem;
  height: 196px;
  left: 1333px;
  top: 1483px;
`;
export const GridLogoSideBar0 = styled(GridLogo2)`
  display: block;
  position: inherit;
  width: 110%;
  margin-right: 3rem;
  padding-top: 1rem;
  margin-left: -2rem;
`;
export const GridLogoSideBar1 = styled(GridLogoSide1)`
  width: 68%;
  padding-top: 1rem;
  margin-left: -3rem;
`;
export const GridLogoSideBar2 = styled(GridLogoSide2)`
  display: block;
  width: 40%;
  margin-left: 1rem;
  padding-top: 1rem;
`;
