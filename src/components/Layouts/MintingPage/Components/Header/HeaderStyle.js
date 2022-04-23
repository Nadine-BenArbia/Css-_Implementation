import styled from "@emotion/styled";
import { positions } from "@mui/system";
import { colors } from "../../../../../constants/colors";
import { Logo2, LogoBom } from "../../../../../constants/Logo";
import { StyledText } from "../../../../../constants/paragraph";

export const GlobalDiv = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
`;
export const StyledTimer = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
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
