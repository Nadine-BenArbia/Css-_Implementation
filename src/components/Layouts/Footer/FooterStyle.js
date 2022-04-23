import styled from "@emotion/styled";
import { PrimaryButton } from "../../../constants/ButtonStyle";
import { colors } from "../../../constants/colors";
import { StyledText } from "../../../constants/paragraph";

export const FooterStyle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.red};
  background-color: ${colors.background};
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
export const FooterButton = styled(PrimaryButton)`
  width: 8rem;
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
