import styled from "@emotion/styled";

import { Logo1, Logo2, Logo3, Logo4 } from "../../../constants/Logo";
import { StyledText } from "../../../constants/paragraph";

export const StyledHeader = styled("div")`
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
export const First = styled(Logo1)`
  position: relative;
  top: 0;
  left: 0;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
export const Second = styled(Logo2)`
  position: absolute;
  top: -16px;
  left: 214px;
  @media (max-width: 600px) {
    position: absolute;
  }
`;
export const Third = styled(Logo3)`
  position: absolute;
  margin-left: -32%;
  transform: rotate(45deg);
  @media (max-width: 600px) {
    left: 70.7%;
    right: -70.6%;
    top: 0.02%;
    bottom: -0.07%;
  }
`;
export const Forth = styled(Logo4)`
  left: 70.7%;
  right: -70.6%;
  top: 0.02%;
  bottom: -0.07%;
  margin-left: 60%;
  @media (max-width: 600px) {
    position: absolute;

    left: 70.7%;
    right: -70.6%;
    top: 0.02%;
    bottom: -0.07%;
  }
`;
export const HeaderText = styled(StyledText)`
  width: 50%;
`;
