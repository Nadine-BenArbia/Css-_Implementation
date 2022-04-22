import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { StyledText } from "../../constants/paragraph";

export const StyledP = styled(StyledText)`
  padding: 1em;
  width: 50%;

  text-align: center;
  color: ${colors.lightRed};
`;
