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
`;
export const First = styled(Logo1)`
  position: relative;
  top: 0;
  left: 0;
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 2rem;
  }
`;
export const Second = styled(Logo2)`
  position: absolute;
  top: -16px;
  left: 214px;
  @media (max-width: 700px) {
    position: absolute;
    width: 40%;
    top: -16px;
    left: 171px;
  }
`;
export const Third = styled(Logo3)`
  position: absolute;
  margin-left: -32%;
  transform: rotate(45deg);
  @media (min-width: 800px), (max-width: 600px) {
    width: 13%;
    margin-left: -42%;
  }
`;
export const Forth = styled(Logo4)`
  left: 70.7%;
  right: -70.6%;
  top: 0.02%;
  bottom: -0.07%;
  margin-left: 80%;
`;
export const HeaderText = styled(StyledText)`
  width: 50%;
`;
