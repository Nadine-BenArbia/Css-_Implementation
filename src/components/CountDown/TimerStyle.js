import styled from "@emotion/styled";
import { PrimaryButton } from "../../constants/ButtonStyle";

import { colors } from "../../constants/colors";
import { StyledText } from "../../constants/paragraph";

export const StyledTimer = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
`;

export const StyledP = styled(StyledText)`
  justify-content: center;
  color: ${colors.lightRed};
  font-weight: 700;
  padding: 1em;
  width: 50%;

  text-align: center;
  color: ${colors.lightRed};
`;
export const ButtonTimer = styled("div")`
  padding: 2rem;
`;
// export const CounterDeff = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
export const H1 = styled.h1`
  color: ${colors.red};
`;
export const Span = styled.span`
  color: ${colors.lightRed};
  margin: 8%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
