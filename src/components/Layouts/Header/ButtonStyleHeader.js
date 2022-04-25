import styled from "@emotion/styled";
import { PrimaryButton } from "../../../constants/ButtonStyle";

export const ButtonStyleHeader = styled(PrimaryButton)`
  width: 15%;

  @media (max-width: 772px) {
    width: 25%;
  }
`;
